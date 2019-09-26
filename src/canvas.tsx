import React from 'react';
import ReactDOM from 'react-dom';
import {samplePointsOnPlane, fractalRender_Simple, dwellArray_to_colorArray, DwellFunction, fractalRender_MarianiSilverSquare} from './fractals';
import {Alg2, Complex, SplitComplex, DualNumber} from './algebra'
import {Color} from './color'



interface Props_FractalCanvas
{
	width:number;
	height:number;
	max_dwell:number;
	span:[Alg2, Alg2]; //everything else flows from whether span is a Complex or a SplitComplex
	palette:Color[];
	dwell_func:DwellFunction;
}

class FractalCanvas extends React.Component<Props_FractalCanvas>
{
	private canvasRef:React.RefObject<HTMLCanvasElement>;

	constructor(props:Props_FractalCanvas)
	{
		super(props);
		this.canvasRef = React.createRef();
	}

	componentDidMount()
	{
		this.renderFractalOnCanvas();
	}

	componentDidUpdate()
	{
		this.renderFractalOnCanvas();
	}

	renderFractalOnCanvas()
	{
		const context = this.canvasRef.current!.getContext('2d');
/*		const point_array = samplePointsOnPlane(this.props.width, this.props.height, this.props.span);
		const dwell_array = fractalRender_Simple(this.props.width, this.props.height, point_array, this.props.max_dwell, this.props.dwell_func);
		const color_array = dwellArray_to_colorArray(this.props.width, this.props.height, dwell_array, this.props.palette);

		for (let y = 0; y < this.props.height; y++)
		{
			for (let x = 0; x < this.props.width; x++)
			{
				context!.fillStyle = color_array[y][x].getCSS();
				context!.fillRect(x, y, 1, 1);
			}
		}
*/
		const ms_tree = fractalRender_MarianiSilverSquare(this.props.width, this.props.height, this.props.span,
														this.props.max_dwell, this.props.dwell_func);
		const squares = ms_tree.parse_tree();
		for (let i = 0; i < squares.length; i++)
		{
			let square = squares[i];
			context!.strokeStyle = "#FF4488";
			context!.strokeRect(square.get_anchor()[0], square.get_anchor()[1],
								square.get_size()[0], square.get_size()[1]);
			context!.fillStyle = this.props.palette[square.get_dwell()].getCSS();
			context!.fillRect(square.get_anchor()[0], square.get_anchor()[1],
								square.get_size()[0], square.get_size()[1]);
		}
	}

	render()
	{
		return (
			<canvas ref={this.canvasRef} width={this.props.width} height={this.props.height} />
		);
	}
}

export { FractalCanvas };