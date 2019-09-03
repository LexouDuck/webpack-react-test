import React from "react";
import ReactDOM from "react-dom";
import {AppProps, AppState} from './main'



interface MenuProps
{
	default:AppState,
	update:(state:AppState)=>void
}

export class Menu extends React.Component<MenuProps, AppState>
{
	constructor(props:MenuProps, state:AppState)
	{
		super(props, state);
		this.state =
		{
			min_x: props.default.min_x,
			min_y: props.default.min_y,
			max_x: props.default.max_x,
			max_y: props.default.max_y,
		};

		this.handleChange_MinX = this.handleChange_MinX.bind(this);
		this.handleChange_MinY = this.handleChange_MinY.bind(this);
		this.handleChange_MaxX = this.handleChange_MaxX.bind(this);
		this.handleChange_MaxY = this.handleChange_MaxY.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate()
	{
		this.render();
	}

	handleChange_MinX(event:React.ChangeEvent<HTMLInputElement>)
	{
		this.setState({min_x: Number(event.target.value)});
	}
	handleChange_MinY(event:React.ChangeEvent<HTMLInputElement>)
	{
		this.setState({min_y: Number(event.target.value)});
	}
	handleChange_MaxX(event:React.ChangeEvent<HTMLInputElement>)
	{
		this.setState({max_x: Number(event.target.value)});
	}
	handleChange_MaxY(event:React.ChangeEvent<HTMLInputElement>)
	{
		this.setState({max_y: Number(event.target.value)});
	}

	handleSubmit(event:React.FormEvent<HTMLFormElement>)
	{
		event.preventDefault();
		this.props.update(this.state);
	}

	render()
	{
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Min X:	<input type="number" value={this.state.min_x} onChange={this.handleChange_MinX} />	<br/>
					Min Y:	<input type="number" value={this.state.min_y} onChange={this.handleChange_MinY} />	<br/>
					Max X:	<input type="number" value={this.state.max_x} onChange={this.handleChange_MaxX} />	<br/>
					Max Y:	<input type="number" value={this.state.max_y} onChange={this.handleChange_MaxY} />	<br/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}
