import { Component } from 'preact';
import { Link } from 'preact-router/match';
import linkState from 'linkstate';
import { database } from '../../components/firebase';

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
		interest: 'false'
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
			interest: 'false'
		});
	}
	
	render ({}, { message, firstName, lastName, email, company, title, country, interest }) {

		return (
			<div>
				<form onSubmit={this.submit}>
					<Link href="/contact" aria-label="Contact">Contact</Link>
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
						<div>
							<label htmlFor="message">Please tell us how we can help you</label>
							<input type="text" name="message" id="message" value={message} onInput={linkState(this, 'message')} />
						</div>
						<div>
							<label htmlFor="firstName">First Name</label>
							<input type="text" name="firstName" id="firstName" value={firstName} onInput={linkState(this, 'firstName')} />
						</div>
						<div>
							<label htmlFor="lastName">Last Name</label>
							<input type="text" name="lastName" id="lastName" value={lastName} onInput={linkState(this, 'lastName')} />
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<input type="email" name="email" id="email" value={email} onInput={linkState(this, 'email')} />
						</div>
						<div>
							<label htmlFor="company">Company</label>
							<input type="text" name="company" id="company" value={company} onInput={linkState(this, 'company')} />
						</div>
						<div>
							<label htmlFor="title">Title</label>
							<input type="text" name="title" id="title" value={title} onInput={linkState(this, 'title')} />
						</div>
						<div>
							<label htmlFor="country">Country</label>
							<input type="text" name="country" id="country" value={country} onInput={linkState(this, 'country')} />
						</div>
					</fieldset>
					<fieldset>
						<div>
							<input type="checkbox" name="checkbox_interest" id="checkbox_interest" onInput={linkState(this, 'interest')} />
							<label htmlFor="checkbox_interest">I am interested in receiving articles and insights from Concrezan.</label>
						</div>
					</fieldset>
					<div>
						<p> By submitting this form, I consent to the processing of the personal data that I provide Concrezan in accordance with and as described in the <Link href="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</Link>
						</p>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default General;
