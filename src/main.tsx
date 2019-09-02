import React from "react";
import ReactDOM from "react-dom";
import {MandelbrotCanvas, Color} from './react-canvas';
import {Complex, SplitComplex, DualNumber} from './algebra'



interface AppProps
{
	span_x:number,
	span_y:number,
};

interface AppState
{
	span_x:number,
	span_y:number,
};

class FractalApp extends React.Component<AppProps, AppState>
{
	constructor(props:AppProps, state:AppState)
	{
		super(props, state);
		this.state =
		{
			span_x: 2,
			span_y: 2,
		};
		this.handleChange_X = this.handleChange_X.bind(this);
		this.handleChange_Y = this.handleChange_Y.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount()
	{
		this.render();
	}

	handleChange_X(event:React.ChangeEvent<HTMLInputElement>)
	{
		this.setState({span_x: Number(event.target.value)});
	}
	handleChange_Y(event:React.ChangeEvent<HTMLInputElement>)
	{
		this.setState({span_y: Number(event.target.value)});
	}

	handleSubmit(event:React.FormEvent<HTMLFormElement>)
	{
		event.preventDefault();
		alert("Span X: " + this.state.span_x + "\nSpan Y: " + this.state.span_y);
		this.render();
	}

	render()
	{
		return (
			<div className="FractalApp">
				<form onSubmit={this.handleSubmit}>
					<label>
						Span X:	<input type="number" value={this.state.span_x} onChange={this.handleChange_X} />	<br/>
						Span Y:	<input type="number" value={this.state.span_y} onChange={this.handleChange_Y} />	<br/>
					</label>
					<input type="submit" value="Submit" />
				</form>
				Span X:	{this.state.span_x}	<br/>
				Span Y:	{this.state.span_y}	<br/>
				<MandelbrotCanvas
					width={1024}
					height={1024}
					span={[new Complex(-this.state.span_x, -this.state.span_y), new Complex(this.state.span_x, this.state.span_y)]}
				/>
			</div>
		);
	}
}

export { FractalApp };
