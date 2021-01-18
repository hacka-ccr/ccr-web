import React from 'react';
import LandingPage from './pages/LandingPage';
import Schedule from './pages/Schedule';

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
			</Switch>
		</Router>
	);
}

export default App;
