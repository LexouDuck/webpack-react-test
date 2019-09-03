import React from "react";
import ReactDOM from "react-dom";
import {Menu} from "./menu"
import {MandelbrotCanvas, Color} from "./react-canvas";
import {Complex, SplitComplex, DualNumber} from "./algebra"



export interface State_FractalApp
{
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
			<div className="FractalApp">
				<Menu
					default={this.state}
					update={this.update.bind(this)}
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
