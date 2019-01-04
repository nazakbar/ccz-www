import { Component } from 'preact';
import { Link } from 'preact-router/match';
import linkState from 'linkstate';
import { database } from '../../components/firebase';

import TextArea from '../../components/contactForm/textArea';
import Input from '../../components/contactForm/inputGroup';
import Checkbox from '../../components/contactForm/checkbox';

/**TODO - What is missing
 * separation to stateless
 * notice
 * Title
 * back button
 */

class General extends Component {
	state = {
		selected: 'inquiries',
		message: '',
		firstName: '',
		lastName: '',
		email: '',
		company: '',
		title: '',
		country: '',
		interest: ''
	};

	onChange = (e) => {
		this.setState({
			selected: e.target.value
		});
	}

	submit = (e) => {
		e.preventDefault();

		const contactRefs = database.ref('/contacts/new-business');
		contactRefs.push({
			selected: this.state.selected,
			message: this.state.message,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			company: this.state.company,
			title: this.state.title,
			country: this.state.country,
			interest: this.state.interest
		});
		this.setState({
			selected: 'inquiries',
			message: '',
			firstName: '',
			lastName: '',
			email: '',
			company: '',
			title: '',
			country: '',
			interest: ''
		});
	}
	
	render ({}, { message, firstName, lastName, email, company, title, country, interest }) {

		console.log(this.state.selected);
		return (
			<div>
				<form onSubmit={this.submit}>
					<h2>General</h2>
					<fieldset>
						<p>Are you contacting us about</p>
						<div>
							<input type="radio" value="inquiries" id="inquiries" checked={this.state.selected === 'inquiries'} onChange={this.onChange} />
							<label htmlFor="inquiries">Inquiries</label>
						</div>
						<div>
							<input type="radio" value="feedbacks" id="feedbacks" checked={this.state.selected === 'feedbacks'} onChange={this.onChange} />
							<label htmlFor="feedbacks">Feedbacks</label>
						</div>
						<div>
							<input type="radio" value="careers" id="careers" checked={this.state.selected === 'careers'} onChange={this.onChange} />
							<label htmlFor="careers">Careers</label>
						</div>
						<div>
							<input type="radio" value="collaborations" id="collaborations" checked={this.state.selected === 'collaborations'} onChange={this.onChange} />
							<label htmlFor="collaborations">Collaborations</label>
						</div>
						<div>
							<input type="radio" value="media" id="media" checked={this.state.selected === 'media'} onChange={this.onChange} />
							<label htmlFor="media">Media Relations</label>
						</div>
					</fieldset>
					<fieldset>
						<TextArea value={message} onInput={linkState(this, 'message')}>Please tell us how we can help you</TextArea>
						<Input type="text" name="firstName" value={firstName} onInput={linkState(this, 'firstName')}>First Name</Input>
						<Input type="text" name="lastName" value={lastName} onInput={linkState(this, 'lastName')}>Last Name</Input>
						<Input type="email" name="email" value={email} onInput={linkState(this, 'email')}>Email</Input>
						<Input type="text" name="company" value={company} onInput={linkState(this, 'company')}>Company</Input>
						<Input type="text" name="title" value={title} onInput={linkState(this, 'title')}>Title</Input>
						<Input type="text" name="country" value={country} onInput={linkState(this, 'country')}>Country</Input>
					</fieldset>
					<Checkbox name="interest" value={interest} onInput={linkState(this, 'interest')} />
					<div>
						<p>
							By submitting this form, I consent to the processing of the personal data that I provide Concrezan in accordance with and as described in the <Link href="/">Privacy Policy.</Link>
						</p>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default General;
