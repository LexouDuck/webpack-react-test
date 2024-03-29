/*
** Import for esModuleInterop
import * as React from "react";
import * as ReactDOM from "react-dom";
*/

/*
** Import for allowSyntheticDefaultImports
*/
import React from "react";
import ReactDOM from "react-dom";
import {
	init2DArray,
	QuadtreeNode,
	Quadtree,
} from './utils';
import {Color} from './color';
import {
	Alg2,
	Complex,
	SplitComplex,
	DualNumber,
	Alg2Class,
	Poly2,
	ComplexPoly,
	SplitComplexPoly,
	DualNumberPoly,
	newAlg2,
	getAlg2_copy
} from './algebra';



export type Dwell         = number
export type DwellFunction = (max_dwell : Dwell, alg2 : Alg2) => number;
//export type Sampling2DFunction = (width : number, height : number) => number[][];



function samplePointsOnPlane
(
	width  : number,
	height : number,
	span   : [Alg2, Alg2],
)
{
	let x      : number;
	let y      : number;
	let step   : Alg2;
	let result : Alg2[][];

	if (span[0].x > span[1].x)
	{
		x         = span[0].x;
		span[0].x = span[1].x;
		span[1].x = x;
	}
	if (span[0].y > span[1].y)
	{
		y         = span[0].y;
		span[0].y = span[1].y;
		span[1].y = y;
	}

	step = newAlg2(
		span[0].getClassEnum(),
		(span[1].x - span[0].x) / width,
		(span[1].y - span[0].y) / height,
	);

	result = [];
	for (y = 0; y < height; y++)
	{
		let pointline = [];
		let y_pos     = span[0].y + y * step.y;
		for (x = 0; x < width; x++)
		{
			let x_pos    = span[0].x + x * step.x;
			let new_item = newAlg2(span[0].getClassEnum(), x_pos, y_pos);
			pointline.push(new_item);
		}
		result.push(pointline);
	}

	return (result);
}


function fractalRender_Simple
(
	width     : number,
	height    : number,
	points    : Alg2[][],
	max_dwell : Dwell,
	getDwell  : DwellFunction,
)
	: Dwell[][]
{
	let result : Dwell[][];
	let dwell  : Dwell;

	result = [];
	for (let y = 0; y < height; y++)
	{
		let dwell_line = [];
		for (let x = 0; x < width; x++)
		{
			dwell = getDwell(max_dwell, points[y][x]);
			dwell_line.push(dwell);
		}
		result.push(dwell_line);
	}

	return (result);
}

function dwellArray_to_colorArray
(
	width     : number,
	height    : number,
	dwell_arr : Dwell[][],
	palette   : Color[],
)
	: Color[][]
{
	let result   : Color[][];
	let color    : Color;
	let color_nb : number;

	color_nb = palette.length;

	result = [];
	for (let y = 0; y < height; y++)
	{
		let color_line = [];
		for (let x = 0; x < width; x++)
		{
			color = palette[dwell_arr[y][x] % color_nb];
			color_line.push(color);
		}
		result.push(color_line);
	}

	return (result);
}


class MarianiSilver_Node
{
	private dwell  : Dwell;
	private depth  : number;
	private anchor : [number, number];
	private size   : [number, number];

	constructor
	(
		dwell  : Dwell,
		depth  : number,
		anchor : [number, number],
		size   : [number, number],
	)
	{
		this.dwell  = dwell;
		this.depth  = depth;
		this.anchor = anchor;
		this.size   = size;
	}

	get_dwell()
	{
		return (this.dwell);
	}
	get_depth()
	{
		return (this.depth);
	}
	get_anchor()
	{
		return (this.anchor);
	}
	get_size()
	{
		return (this.size);
	}
}

function handlePoint_MarianiSilver
(
	x           : number,
	y           : number,
	point_array : Alg2[][],
	dwell_array : Dwell[][],
	max_dwell   : Dwell,
	dwell_func  : DwellFunction,
)
	: number
{
	let dwell        : number;
	let stored_dwell : number;

	stored_dwell = dwell_array[y][x];
	if (stored_dwell != -1)
	{
		return (stored_dwell);
	}
	dwell = dwell_func(max_dwell, point_array[y][x]);
	dwell_array[y][x] = dwell;
	return (dwell);
}


function fillDwellRectangle_MarianiSilverSquare
(
	anchor      : [number, number],
	size        : [number, number],
	point_array : Alg2[][],
	dwell_array : Dwell[][],
	max_dwell   : Dwell,
	dwell_func  : DwellFunction,
)
	: Dwell
{
	function partialApply_handlePoint(x: number, y: number) : Dwell
	{
		return handlePoint_MarianiSilver(
			x,
			y,
			point_array,
			dwell_array,
			max_dwell,
			dwell_func,
		);
	}

	let cur_dwell    : number;
	let unique_dwell : Boolean = true;
	let end_x      = anchor[0] + size[0];
	let end_y      = anchor[1] + size[1];
	let base_dwell = partialApply_handlePoint(anchor[0], anchor[1]);

	for (let x = anchor[0]; x < end_x; x++)
	{
		cur_dwell = partialApply_handlePoint(x, anchor[1]); if (cur_dwell != base_dwell)  { unique_dwell = false; }
		cur_dwell = partialApply_handlePoint(x, end_y - 1); if (cur_dwell != base_dwell)  { unique_dwell = false; }
	}
	for (let y = anchor[1] + 1; y < end_y - 1; y++)
	{
		cur_dwell = partialApply_handlePoint(anchor[0], y); if (cur_dwell != base_dwell)  { unique_dwell = false; }
		cur_dwell = partialApply_handlePoint(end_x - 1, y); if (cur_dwell != base_dwell)  { unique_dwell = false; }
	}
	return (unique_dwell ? base_dwell : -1);
}

function recursion_MarianiSilverSquare
(
	anchor      : [number, number],
	size        : [number, number],
	point_array : Alg2[][],
	dwell_array : Dwell[][],
	max_dwell   : Dwell,
	dwell_func  : DwellFunction,
	ms_depth    : number,
	treenode    : QuadtreeNode<MarianiSilver_Node>,
)
	: void
{
	if (size[0] <= 2 || size[1] <= 2)
		return ;

	let w_is_odd    = size[0] % 2 === 1;
	let h_is_odd    = size[1] % 2 === 1;
	let w_half_size = size[0] / 2;
	let h_half_size = size[1] / 2;

	let w_half        = w_is_odd ? Math.ceil(w_half_size) : (w_half_size);
	let h_half        = h_is_odd ? Math.ceil(h_half_size) : (h_half_size);
	let w_even_offset = w_is_odd ? 0 : 1;
	let h_even_offset = h_is_odd ? 0 : 1;
	let w_mid_anchor  = anchor[0] + Math.floor(w_half_size) - w_even_offset;
	let h_mid_anchor  = anchor[1] + Math.floor(h_half_size) - h_even_offset;

	let anchor_top_l : [number, number] = [ anchor[0]    , anchor[1]    ];
	let anchor_top_r : [number, number] = [ w_mid_anchor , anchor[1]    ];
	let anchor_bot_l : [number, number] = [ anchor[0]    , h_mid_anchor ];
	let anchor_bot_r : [number, number] = [ w_mid_anchor , h_mid_anchor ];

	let size_top_l : [number, number] = [ w_half                 , h_half                 ];
	let size_top_r : [number, number] = [ w_half + w_even_offset , h_half                 ];
	let size_bot_l : [number, number] = [ w_half                 , h_half + h_even_offset ];
	let size_bot_r : [number, number] = [ w_half + w_even_offset , h_half + h_even_offset ];


	function partialApply_FillDwell
	(
		q_anchor : [number, number],
		q_size   : [number, number],
	)
		: Dwell
	{
		return fillDwellRectangle_MarianiSilverSquare
		(
			q_anchor,
			q_size,
			point_array,
			dwell_array,
			max_dwell,
			dwell_func,
		);
	}

	function partialApply_MSSquare
	(
		q_anchor : [number, number],
		q_size   : [number, number],
		q_node   : QuadtreeNode<MarianiSilver_Node>,
	)
		: void
	{
		recursion_MarianiSilverSquare
		(
			q_anchor,
			q_size,
			point_array,
			dwell_array,
			max_dwell,
			dwell_func,
			ms_depth + 1,
			q_node,
		);
	}

	function computeQuadrant
	(
		q_anchor : [number, number],
		q_size   : [number, number],
		q_node   : QuadtreeNode<MarianiSilver_Node>,
	)
		: void
	{
		let test_dwell : number = partialApply_FillDwell(q_anchor, q_size);
		if (test_dwell != -1)
		{
			let new_node = new MarianiSilver_Node(test_dwell, ms_depth, q_anchor, q_size);
			q_node.set_data(new_node);
		}
		else
		{
			partialApply_MSSquare(q_anchor, q_size, q_node);
		}
	}

	treenode.build_empty_children();

	computeQuadrant(anchor_top_l, size_top_l, treenode!.get_top_l()!);
	computeQuadrant(anchor_top_r, size_top_r, treenode!.get_top_r()!);
	computeQuadrant(anchor_bot_l, size_bot_l, treenode!.get_bot_l()!);
	computeQuadrant(anchor_bot_r, size_bot_r, treenode!.get_bot_r()!);
}

function fractalRender_MarianiSilverSquare
(
	width      : number,
	height     : number,
	span       : [Alg2, Alg2],
	max_dwell  : Dwell,
	dwell_func : DwellFunction,
)
	: Quadtree<MarianiSilver_Node>
{
	let point_array : Alg2 [][] = samplePointsOnPlane(width, height, span);
	let dwell_array : Dwell[][] = init2DArray(width, height, -1);
	let result                  = new Quadtree<MarianiSilver_Node>();

	recursion_MarianiSilverSquare
	(
		[0,0],
		[width, height],
		point_array,
		dwell_array,
		max_dwell,
		dwell_func,
		0,
		result!.get_root()!,
	);

	return (result);
}



function mandelbrotDwell(max_dwell : Dwell, start: Alg2)
{
	let dwell = 0;
	let z : Alg2;

	z = getAlg2_copy(start);

	while (Math.abs(z.quadnorm()) < 4 && dwell < max_dwell)
	{
		z.mult(z);
		z.add(start);
		dwell++;
	}

	return (dwell);
}

export
{
	samplePointsOnPlane,
	fractalRender_Simple,
	dwellArray_to_colorArray,
	mandelbrotDwell,
	fractalRender_MarianiSilverSquare,
};

