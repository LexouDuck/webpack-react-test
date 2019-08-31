import React from 'react';
import './App.css';
import {MandelbrotCanvas, Color} from './react-canvas';
import {Complex, SplitComplex} from './fractals'

const App: React.FC = () =>
{
	return (
		<div className="App">
			<header className="App-header">
				<MandelbrotCanvas width={1024} height={1024} span={[new SplitComplex(-2, -2), new SplitComplex(2, 2)]} />
			</header>
		</div>
	);
}

export default App;

//				<div id='container' />
//				<CanvasComponent width={300} height={500} bg_color={new Color(200, 15, 100)} />