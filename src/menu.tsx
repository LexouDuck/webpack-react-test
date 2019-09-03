import React from "react";
import ReactDOM from "react-dom";
import {AppProps, AppState} from './main'



interface Props_MenuItem_Number
{
	label:string,
	value:number,
	update:(value:number)=>void
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
		this.setState({ value: new_value });
		this.props.update(new_value);
	}

	render()
	{
		return (
			<label>
				{this.props.label}	<input type="number" value={this.state.value} onChange={this.handleChange_Number.bind(this)} />	<br/>
			</label>
		);
	}
}



interface MenuProps
{
	default:AppState,
	update:(state:AppState)=>void
}

class Menu extends React.Component<MenuProps>
{
	state_menu:AppState;

	constructor(props:MenuProps)
	{
		super(props);
		this.state_menu =
		{
			min_x: props.default.min_x,
			min_y: props.default.min_y,
			max_x: props.default.max_x,
			max_y: props.default.max_y,
		};
	}

	handleChange_MinX(value:number)
	{
		this.state_menu.min_x = value;
	}
	handleChange_MinY(value:number)
	{
		this.state_menu.min_y = value;
	}
	handleChange_MaxX(value:number)
	{
		this.state_menu.max_x = value;
	}
	handleChange_MaxY(value:number)
	{
		this.state_menu.max_y = value;
	}

	handleSubmit(event:React.FormEvent<HTMLFormElement>)
	{
		event.preventDefault();
		this.props.update(this.state_menu);
	}

	render()
	{
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<MenuItem_Number label={"Min X:"} value={this.props.default.min_x} update={this.handleChange_MinX.bind(this)} />
				<MenuItem_Number label={"Min Y:"} value={this.props.default.min_y} update={this.handleChange_MinY.bind(this)} />
				<MenuItem_Number label={"Max X:"} value={this.props.default.max_x} update={this.handleChange_MaxX.bind(this)} />
				<MenuItem_Number label={"Max Y:"} value={this.props.default.max_y} update={this.handleChange_MaxY.bind(this)} />
				<input type="submit" value="Refresh Fractal" />
			</form>
		);
	}
}

export { Menu };
