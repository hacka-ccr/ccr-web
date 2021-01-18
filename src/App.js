import React from 'react';
import LandingPage from './pages/LandingPage';
import Schedule from './pages/Schedule';
import Store from './pages/Store';

import styles from './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<LandingPage />;
				</Route>

				<Route exact path='/schedule'>
					<Schedule />;
				</Route>

				<Route exact path='/store'>
					<Store />;
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
