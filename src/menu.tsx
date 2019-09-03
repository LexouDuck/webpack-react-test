import React from "react";
import ReactDOM from "react-dom";
import {State_FractalApp} from './main'



interface Props_MenuItem_Number
{
	label:string,
	value:number,
	update:(value:number)=>boolean
}
interface State_MenuItem_Number
{
	value:number
}
class MenuItem_Number extends React.Component<Props_MenuItem_Number, State_MenuItem_Number>
{
	constructor(props:Props_MenuItem_Number, state:State_MenuItem_Number)
	{
		super(props, state);
		this.state = { value: props.value };
	}

	handleChange_Number(event:React.ChangeEvent<HTMLInputElement>)
	{
		let new_value:number = Number(event.target.value);
		if (this.props.update(new_value))
		{
			this.setState({ value: new_value });
		}
	}

	render()
	{
		return (
			<label>
				{this.props.label} <input type="number" step="any"
					value={this.state.value}
					onChange={this.handleChange_Number.bind(this)}
				/>
				<br/>
			</label>
		);
	}
}



interface Props_Menu
{
	default:State_FractalApp,
	update:(state:State_FractalApp)=>void
}

class Menu extends React.Component<Props_Menu>
{
	state_menu:State_FractalApp;

	constructor(props:Props_Menu)
	{
		super(props);
		this.state_menu =
		{
			dwell: props.default.dwell,
			min_x: props.default.min_x,
			min_y: props.default.min_y,
			max_x: props.default.max_x,
			max_y: props.default.max_y,
		};
	}

	handleChange_Dwell(value:number):boolean
	{
		this.state_menu.dwell = Math.floor(value);
		return (true);
	}
	handleChange_MinX(value:number):boolean
	{
		if (value > this.state_menu.max_x)
			return (false);
		this.state_menu.min_x = value;
		return (true);
	}
	handleChange_MinY(value:number):boolean
	{
		if (value > this.state_menu.max_y)
			return (false);
		this.state_menu.min_y = value;
		return (true);
	}
	handleChange_MaxX(value:number):boolean
	{
		if (value < this.state_menu.min_x)
			return (false);
		this.state_menu.max_x = value;
		return (true);
	}
	handleChange_MaxY(value:number):boolean
	{
		if (value < this.state_menu.min_y)
			return (false);
		this.state_menu.max_y = value;
		return (true);
	}

	handleSubmit(event:React.FormEvent<HTMLFormElement>)
	{
		event.preventDefault();
		this.props.update(this.state_menu);
	}

	render()
	{
		return (
			<form onSubmit={this.handleSubmit.bind(this)} style={{textAlign:"right", marginRight:"50px"}}>
				<MenuItem_Number label={"Dwell:"} value={this.props.default.dwell} update={this.handleChange_Dwell.bind(this)} />
				<hr />
				<MenuItem_Number label={"Min X:"} value={this.props.default.min_x} update={this.handleChange_MinX.bind(this)} />
				<MenuItem_Number label={"Min Y:"} value={this.props.default.min_y} update={this.handleChange_MinY.bind(this)} />
				<MenuItem_Number label={"Max X:"} value={this.props.default.max_x} update={this.handleChange_MaxX.bind(this)} />
				<MenuItem_Number label={"Max Y:"} value={this.props.default.max_y} update={this.handleChange_MaxY.bind(this)} />
				<hr />
				<input type="color" value="#000000" />
				<hr />
				<input type="submit" value="Refresh Fractal" />
			</form>
		);
	}
}

export { Menu };
