import React from 'react';
import { MHome, MAccount } from '@mobile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// const routes = {};

const routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<MHome />
				</Route>
				<Route exact path="/tai-khoan">
					<MAccount />
				</Route>
			</Switch>
		</Router>
	);
};

export default routes;
