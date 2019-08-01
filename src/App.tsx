import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () =>
{
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					<br/>Edit <code>src/App.tsx</code> and save to reload.
					<br/>for real nigga ?
					<br/>FOR REAL.
					<br/>THIS IS WEBDEV.
					<br/>EVERYTHING IS BEING TAKEN CARE OF.
					<br/>THERE ARE NO WORRIES YOU SHOULD FILL YOUR HEAD WITH.
					<br/><b>KEEP DEVELOPING</b>
					<br/>
					<br/><i>SEE YOU LATER, CODE MONKEY</i>
				</p>
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
