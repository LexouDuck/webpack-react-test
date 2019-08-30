import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MandelbrotCanvas, Color} from './react-canvas';
import {Complex} from './fractals'

const App: React.FC = () =>
{
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					<br/>Edit <code>src/App.tsx</code> and save to reload.
					<br/>for real nigz ?
					<br/>FOR REAL.
					<br/>THIS IS WEBDEV.
					<br/>EVERYTHING IS BEING TAKEN CARE OF.
					<br/>THERE ARE NO WORRIES YOU SHOULD FILL YOUR HEAD WITH.
					<br/><b>KEEP DEVELOPING</b>
					<br/>
					<br/><i>SEE YOU LATER, CODE MONKEY</i>
				</p>
				<MandelbrotCanvas width={300} height={300} span={[new Complex(-1, -1), new Complex(1, 1)]} />
				<a href="https://reactjs.org"
					className="App-link"
					target="_blank"
					rel="noopener noreferrer">
					Click Here to Learn React
				</a>
			</header>
		</div>
	);
}

export default App;

//				<div id='container' />
//				<CanvasComponent width={300} height={500} bg_color={new Color(200, 15, 100)} />