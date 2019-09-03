import React from "react";
import ReactDOM from "react-dom";
import {Menu} from "./menu";
import {MandelbrotCanvas, Color} from "./react-canvas";
import {Complex, SplitComplex, DualNumber} from "./algebra";



export interface AppProps
{
	min_x:number,
	min_y:number,
	max_x:number,
	max_y:number,
};

export interface AppState
{
	min_x:number,
	min_y:number,
	max_x:number,
	max_y:number,
};

class FractalApp extends React.Component<AppProps, AppState>
{
	constructor(props:AppProps, state:AppState)
	{
		super(props, state);
		this.state =
		{
			min_x: props.min_x,
			min_y: props.min_y,
			max_x: props.max_x,
			max_y: props.max_y,
		};

		this.update = this.update.bind(this);
	}

	update(state:AppState)
	{
		this.setState(state);
	}

	render()
	{
		return (
			<div className="FractalApp">
				<Menu
					default={this.state}
					update={this.update}
				/>
				<MandelbrotCanvas
					width={1024}
					height={1024}
					span={[new Complex(this.state.min_x, this.state.min_y), new Complex(this.state.max_x, this.state.max_y)]}
				/>
			</div>
		);
	}
}

export { FractalApp };
