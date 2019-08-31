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
import Color from './utils';
import {Alg2, Complex, SplitComplex, DualNumber, Alg2Class,
		Poly2, ComplexPoly, SplitComplexPoly, DualNumberPoly} from './algebra';


export type DwellFunction = (max_dwell : number, alg2 : Alg2) => number;
//export type Sampling2DFunction = (width : number, height : number) => number[][];

function samplePointsOnPlane(width : number, height : number, span : [Alg2, Alg2])
{
	let x : number;
	let y : number;
	let step : Alg2;
	let result : Alg2[][];
	let is_complex = (span[0] instanceof Complex);

	if (span[0].x > span[1].x)
	{
		x = span[0].x;
		span[0].x = span[1].x;
		span[1].x = x;
	}
	if (span[0].y > span[1].y)
	{
		y = span[0].y;
		span[0].y = span[1].y;
		span[1].y = y;
	}

	if (is_complex)
	{
		step = new Complex((span[1].x - span[0].x) / width,
							(span[1].y - span[0].y) / height);
	}
	else
	{
		step = new SplitComplex((span[1].x - span[0].x) / width,
							(span[1].y - span[0].y) / height);
	}
	result = [];
	for (y = 0; y < height; y++)
	{
		let pointline = [];
		let y_pos = span[0].y + y * step.y;
		for (x = 0; x < width; x++)
		{
			let x_pos = span[0].x + x * step.x;
			let new_item : Alg2;
			if (is_complex)
			{
				new_item = new Complex(x_pos, y_pos);
			}
			else
			{
				new_item = new SplitComplex(x_pos, y_pos);
			}
			pointline.push(new_item);
		}
		result.push(pointline);
	}

	return (result);
}

//function fractalRender_MarianiSilver()

function fractalRender_Simple(width : number, height : number, points : Alg2[][],
								max_dwell : number, getDwell : DwellFunction)
{
	let result : number[][];
	let dwell : number;

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

//console.log(result);

	return (result);
}

function dwellArray_to_colorArray(width : number, height : number, dwell_arr : number[][], palette : Color[])
{
	let result : Color[][];
	let color : Color;
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

function mandelbrotDwell(max_dwell : number, start: Alg2)
{
	let dwell = 0;
	let z : Alg2;

	if (start instanceof Complex)
		z = new Complex(start.x, start.y);
	else
		z = new SplitComplex(start.x, start.y);

	while (Math.abs(z.quadnorm()) < 4 && dwell < max_dwell)
	{
		z.mult(z);
		z.add(start);
		dwell++;
	}

	return (dwell);
}

export {samplePointsOnPlane, fractalRender_Simple, dwellArray_to_colorArray,
		mandelbrotDwell};

