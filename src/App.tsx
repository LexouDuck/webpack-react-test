import React from 'react';
import './App.css';
import {FractalApp} from './main'



const App: React.FC = () =>
{
	return (
		<div className="App">
			<header className="App-header">
				<FractalApp
					min_x={-2}
					min_y={-2}
					max_x={2}
					max_y={2}
				/>
			</header>
		</div>
	);
}

export default App;

//				<div id='container' />
//				<CanvasComponent width={300} height={500} bg_color={new Color(200, 15, 100)} />