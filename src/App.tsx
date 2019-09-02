import React from 'react';
import './App.css';
import {FractalApp} from './main'



const App: React.FC = () =>
{
	return (
		<div className="App">
			<header className="App-header">
				<FractalApp
					span_x={2}
					span_y={2}
				/>
			</header>
		</div>
	);
}

export default App;

//				<div id='container' />
//				<CanvasComponent width={300} height={500} bg_color={new Color(200, 15, 100)} />