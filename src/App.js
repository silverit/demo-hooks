import React, { Fragment } from 'react';
import creteRouter from './router';
import './App.css';

function App() {
	const routeResult = creteRouter();
	return <Fragment>{routeResult}</Fragment>;
}

export default App;
