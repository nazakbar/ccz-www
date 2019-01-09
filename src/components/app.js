import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Helmet from 'preact-helmet';

import Header from './header';
import Menu from './menu';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Capabilities from '../routes/capabilities';
import Strategy from '../routes/strategy';
import Design from '../routes/design';
import Technology from '../routes/technology';
import Company from '../routes/company';
import Process from '../routes/process';
import Profile from '../routes/profile';
import PrivacyPolicy from '../routes/privacyPolicy';
import TermsOfUse from '../routes/termsOfUse';
import Contact from '../routes/contact';
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
				<Helmet
					title="Concrezan | A brand experience and service design company."
					meta={[{
						name: 'description',
						content: `Concrezan is a brand experience and service design company specializing in brand, service, and innovation.`
					}]}
					link={[
						{
							rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'
						}, {
							rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'
						}, {
							rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'
						}
					]}
				/>
				<Header />
				<Menu />
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
					<PrivacyPolicy path="/privacy-policy" />
					<TermsOfUse path="/terms-of-use" />
					<Contact path="/contact" />
					<General path="/contact/general" />
					<NewBusiness path="/contact/new-business" />
				</Router>
			</div>
		);
	}
}
