import React from "react";
import ReactDOM from "react-dom";
import {Menu} from "./menu"
import {FractalCanvas} from "./canvas";
import {DwellFunction, mandelbrotDwell} from './fractals';
import {Complex, SplitComplex, DualNumber} from "./algebra"
import {Color, makeGrayscalePalette} from "./utils"



export interface State_FractalApp
{
	dwell:number,
	min_x:number,
	min_y:number,
	max_x:number,
	max_y:number,
};

class FractalApp extends React.Component<State_FractalApp, State_FractalApp>
{
	constructor(props:State_FractalApp, state:State_FractalApp)
	{
		super(props, state);
		this.state =
		{
			dwell: props.dwell,
			min_x: props.min_x,
			min_y: props.min_y,
			max_x: props.max_x,
			max_y: props.max_y,
		};
	}

	update(state:State_FractalApp)
	{
		this.setState(state);
	}

	render()
	{
		return (
			<div className="FractalApp" style={{display:"flex"}}>
				<div style={{width:"300px"}}>
					<Menu
						default={this.state}
						update={this.update.bind(this)}
					/>
				</div>
				<div style={{flexGrow:1}}>
					<FractalCanvas
						width={600}
						height={600}
						max_dwell={this.state.dwell}
						span={[new Complex(this.state.min_x, this.state.min_y), new Complex(this.state.max_x, this.state.max_y)]}
						palette={makeGrayscalePalette(this.state.dwell)}
						dwell_func={mandelbrotDwell}
					/>
				</div>
			</div>
		);
	}
}

export { FractalApp };
