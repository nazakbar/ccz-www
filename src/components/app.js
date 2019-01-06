import { h, Component } from 'preact';
import { Router } from 'preact-router';

/* import Header from './header'; */

// Code-splitting is automated for routes
import Home from '../routes/home';
import Capabilities from '../routes/capabilities';
import Strategy from '../routes/strategy';
import Design from '../routes/design';
import Technology from '../routes/technology';
import Company from '../routes/company';
import Process from '../routes/process';
import Profile from '../routes/profile';
import General from '../routes/general';
import NewBusiness from '../routes/newBusiness';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				{/* <Header /> */}
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Capabilities path="/capabilities" />
					<Strategy path="/capabilities/strategy" />
					<Design path="/capabilities/design" />
					<Technology path="/capabilities/technology" />
					<Company path="/company" />
					<Process path="/process" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<General path="/contact/general" />
					<NewBusiness path="/contact/new-business" />
				</Router>
			</div>
		);
	}
}
