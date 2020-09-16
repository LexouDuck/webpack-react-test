// 1st import group: all external imports
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// etc...

// 2nd import group: all internal imports (source code files within this project)
// the filepath always starts with './' or '../', and the file extension is omitted
import { Store } from "./redux/store";
import {
	MyType,
	MyType2, // always keep the additional trailing comma ','
} from "./types"
import MyOtherComponent from "./component/MyOtherComponent";
// etc...

// 3rd import group: all asset imports (files with extensions that are not '.ts' or '.tsx')
import "./style.scss";
import "../assets/logo.svg"
import "../assets/background.png";
// etc...



// after 3 line-returns, any general utility functions that can/should be outside the component
function myFunction(n:number):number
{
	return (n * 2);
}
// etc...



// after 3 line-returns, the 'props' type for this component (the type holding all the options/arguments of this component)
interface Props
{
	is_visible:boolean,
	functionToUpdateParent:(new_value:number) => void,
}

// the actual React component that this code file exports
// if there are no 'props', do: const MyComponent:React.FunctionComponent = () =>
const MyComponent:React.FunctionComponent<Props> = (props) =>
{
	/******************
	ONLY IF USING REDUX:
	*******************/

	// init the redux dispatch function, to modify the store (not all components use this)
	const dispatch = useDispatch();

	// get a variable from the redux store
	const storeValue:MyType   = useSelector((store:Store) => store.some_value);
	const storeValue2:MyType2 = useSelector((store:Store) => store.some_value);
	
	/***************
	END OF IF (REDUX)
	****************/

	// 1st: all the state variables (useState)
	const [myValue, setMyValue]   = React.useState<number>(0);
	const [myValue2, setMyValue2] = React.useState<string>("");
	// etc...

	// 2nd: all the useEffect update logic
	useEffect(() =>
	{
		console.log("myValue was changed: " + myValue);
	},
	[myValue]); // the function given to useEffect() is executed whenever myValue is changed
	// NOTE: if you want a useEffect() to run every time there's an update, simply don't give the second argument
	// NOTE: if you want a useEffect() to run only once, when the component first loads: give '[]' as second arg



	// after 3 line-returns, the event functions for this component
	const Button_onClick = (event:React.ClickEvent) =>
	{
		setMyValue(myValue + 1);
	};

	const TextField_ValueChanged = (event:React.ChangeEvent<{}>, value:string) =>
	{
		setMyValue2(value);
	};



	// after 3 line-returns, any local variables used to make the HTML code
	let doubled_value:number = myFunction(myValue);
	// then, any kind of logic which changes the result output HTML
	if (!props.is_visible)
		return (<div></div>);
	// finally, the actual HTML that this component outputs (or "renders", rather)
	// NOTE: the HTML attribute ' class="myClass" ' is called 'className' in TSX syntax
	return (
		<div className="MyComponent">
			<Button onClick={Button_onClick}>
				Click on this button to increment myValue
			</Button>
			<TextField
				multiline
				// you can write inline CSS with the 'style' HTML attribute, by making an object (everything in camelCase, no dashes)
				// so 'max-width' becomes 'maxWidth', 'position' is still 'position', etc
				style={{ width: "80%", maxWidth: "1000px" }}
				label={"MyValue2 Text"}
				title={"This is the text that appears as a tooltip when mousehovering above this TextField"}
				placeholder={"Enter text in here..."}
				onChange={TextField_ValueChanged}
			/>
		</div>
	);
};

// export this file's component
export default MyComponent;
