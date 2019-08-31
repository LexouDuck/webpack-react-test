/*
class CanvasComponent extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillStyle = "#DD00DD";
        ctx.fillRect(0,0, 100, 100);
    }
    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        );
    }
}

ReactDOM.render(<CanvasComponent/>, document.getElementById('container'));



function MyShape() {
  return (
     <Shape fill=”#00D2FF” draggable
         sceneFunc={function (ctx) {
             ctx.beginPath();
             ctx.moveTo(20, 50);
             ctx.lineTo(220, 80);
             ctx.quadraticCurveTo(150, 100, 260, 170);
             ctx.closePath();             // Konva specific method
             ctx.fillStrokeShape(this);
         }}
     />
  );
}
*/


import React from 'react';
import ReactDOM from 'react-dom';
import {samplePointsOnPlane, fractalRender_Simple, dwellArray_to_colorArray,
        DwellFunction, mandelbrotDwell} from './fractals';
import {Alg2, Complex, SplitComplex, DualNumber} from './algebra'
import Color from './utils'






/*
** Because React cannot implement OO inheritance, building a reusable frame for components boils
** down to using composition (where it is possible), or better yet, using Higher Order Components.
*/

/*
interface CanvasProps
{
    width: number;
    height: number;
    bg_color: Color;
//    id: string
}

class CanvasComponent extends React.Component<CanvasProps>
{
    private canvasRef: React.RefObject<HTMLCanvasElement>;

    constructor(props : CanvasProps)
    {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.canvasRef.current!.getContext('2d');
        ctx!.fillStyle = this.props.bg_color.getCSS();
        ctx!.fillRect(0,0, this.props.width, this.props.height);
    }

    render() {
        return (
            <canvas ref={this.canvasRef} width={this.props.width} height={this.props.height} />
        );
    }
}


interface MandelbrotCanvasProps
{
    canvas_props : CanvasProps;
    max_dwell : number;
    size_x : number;
    size_y : number;
    span : [Complex, Complex]; 
}

class MandelbrotCanvasComponent extends CanvasComponent
{
    constructor(props : MandelbrotCanvasProps)
    {
        super(props.canvas_props);

    }
}

export {CanvasComponent, Color};
*/

interface FractalCanvasProps
{
    width: number;
    height: number;
//    palette: Color[];
//    max_dwell: number;
    span : [Alg2, Alg2]; //everything else flows from whether span is a Complex or a SplitComplex
//    dwell_func : DwellFunction;
}

function buildFractalCanvas(palette: Color[], max_dwell : number, dwell_func : DwellFunction)//()
{
    class CustomFractalCanvas extends React.Component<FractalCanvasProps>
    {
        private canvasRef: React.RefObject<HTMLCanvasElement>;

        constructor(props : FractalCanvasProps)
        {
            super(props);
            this.canvasRef = React.createRef();
        }

        componentDidMount()
        {
            this.renderFractalOnCanvas();
        }

        renderFractalOnCanvas()
        {
            const ctx = this.canvasRef.current!.getContext('2d');
            const point_array = samplePointsOnPlane(this.props.width, this.props.height, this.props.span);
            const dwell_array = fractalRender_Simple(this.props.width, this.props.height, point_array, max_dwell, dwell_func);
            const color_array = dwellArray_to_colorArray(this.props.width, this.props.height, dwell_array, palette);

            for (let y = 0; y < this.props.height; y++)
            {
                for (let x = 0; x < this.props.width; x++)
                {
                    ctx!.fillStyle = color_array[y][x].getCSS();
                    ctx!.fillRect(x, y, 1, 1);
                }
            }
        }

        render()
        {
            return (
                <canvas ref={this.canvasRef} width={this.props.width} height={this.props.height} />
            );
        }
    }

    return CustomFractalCanvas;
}


function grayscalePalette(max_dwell : number)
{
    let result : Color[];

    result = [];
    for (let i = 0; i < max_dwell; i++)
    {
        let lerp_val = (i + 1) * 255 / max_dwell;
        result.push(new Color(lerp_val, lerp_val, lerp_val));
    }
    result.push(new Color(0, 0, 0));

    return (result);
}

let max_dwell = 32;
let palette = grayscalePalette(max_dwell);

const MandelbrotCanvas = buildFractalCanvas(palette, max_dwell, mandelbrotDwell);

export {MandelbrotCanvas, Color};