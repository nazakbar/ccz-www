import { Component } from 'preact';
import linkState from 'linkstate';
import { database } from '../../components/firebase';

import { Body } from '../../components/typography';
import { ContactPage, TitleSection, BackLink, ContactTitle, Fieldsets, Labels, RadioContainer, RadioInput, InputContainer, InputLabel, TextArea, TextInput, CheckboxContainer, Checkbox, CheckboxLabel, ConsentSection, PrivacyLink, ButtonSubmit } from '../../components/contactForm';

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
	
	render ({}, { message, firstName, lastName, email, company, title, country }) {

		return (
			<ContactPage>
				<TitleSection>
					<BackLink href="/contact" aria-label="Contact">Back</BackLink>
					<ContactTitle theme={{ main: `#FFF` }}>General</ContactTitle>
				</TitleSection>
				<form onSubmit={this.submit}>
					<Fieldsets>
						<Body theme={{ main: `#FFF` }}>Are you contacting us about</Body>
						<RadioContainer>
							<RadioInput type="radio" value="inquiries" id="inquiries" checked={this.state.selected === 'inquiries'} onChange={this.onChange} />
							<Labels theme={{ main: `#FFF` }} htmlFor="inquiries">Inquiries</Labels>
						</RadioContainer>
						<RadioContainer>
							<RadioInput type="radio" value="feedbacks" id="feedbacks" checked={this.state.selected === 'feedbacks'} onChange={this.onChange} />
							<Labels theme={{ main: `#FFF` }} htmlFor="feedbacks">Feedbacks</Labels>
						</RadioContainer>
						<RadioContainer>
							<RadioInput type="radio" value="careers" id="careers" checked={this.state.selected === 'careers'} onChange={this.onChange} />
							<Labels theme={{ main: `#FFF` }} htmlFor="careers">Careers</Labels>
						</RadioContainer>
						<RadioContainer>
							<RadioInput type="radio" value="collaborations" id="collaborations" checked={this.state.selected === 'collaborations'} onChange={this.onChange} />
							<Labels theme={{ main: `#FFF` }} htmlFor="collaborations">Collaborations</Labels>
						</RadioContainer>
						<RadioContainer>
							<RadioInput type="radio" value="media" id="media" checked={this.state.selected === 'media'} onChange={this.onChange} />
							<Labels theme={{ main: `#FFF` }} htmlFor="media">Media Relations</Labels>
						</RadioContainer>
					</Fieldsets>
					<Fieldsets>
						<InputContainer>
							<InputLabel theme={{ main: `#FFF` }} htmlFor="message">Please tell us how we can help you</InputLabel>
							<TextArea type="text" rows="8" maxLength="256" name="message" id="message" value={message}
								onInput={linkState(this, 'message')}
							/>
						</InputContainer>
						<InputContainer>
							<InputLabel theme={{ main: `#FFF` }} htmlFor="firstName">First Name</InputLabel>
							<TextInput type="text" name="firstName" id="firstName" value={firstName} onInput={linkState(this, 'firstName')} />
						</InputContainer>
						<InputContainer>
							<InputLabel theme={{ main: `#FFF` }} htmlFor="lastName">Last Name</InputLabel>
							<TextInput type="text" name="lastName" id="lastName" value={lastName} onInput={linkState(this, 'lastName')} />
						</InputContainer>
						<InputContainer>
							<InputLabel theme={{ main: `#FFF` }} htmlFor="email">Email</InputLabel>
							<TextInput type="email" name="email" id="email" value={email} onInput={linkState(this, 'email')} />
						</InputContainer>
						<InputContainer>
							<InputLabel theme={{ main: `#FFF` }} htmlFor="company">Company</InputLabel>
							<TextInput type="text" name="company" id="company" value={company} onInput={linkState(this, 'company')} />
						</InputContainer>
						<InputContainer>
							<InputLabel theme={{ main: `#FFF` }} htmlFor="title">Title</InputLabel>
							<TextInput type="text" name="title" id="title" value={title} onInput={linkState(this, 'title')} />
						</InputContainer>
						<InputContainer>
							<InputLabel theme={{ main: `#FFF` }} htmlFor="country">Country</InputLabel>
							<TextInput type="text" name="country" id="country" value={country} onInput={linkState(this, 'country')} />
						</InputContainer>
					</Fieldsets>
					<Fieldsets>
						<CheckboxContainer>
							<Checkbox type="checkbox" name="checkbox_interest" id="checkbox_interest" onInput={linkState(this, 'interest')} />
							<CheckboxLabel theme={{ main: `#FFF` }} htmlFor="checkbox_interest">I am interested in receiving articles and insights from Concrezan.</CheckboxLabel>
						</CheckboxContainer>
					</Fieldsets>
					<ConsentSection>
						<Body theme={{ main: `#FFF` }}> By submitting this form, I consent to the processing of the personal data that I provide Concrezan in accordance with and as described in the <PrivacyLink href="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</PrivacyLink>.
						</Body>
						<ButtonSubmit type="submit">Submit</ButtonSubmit>
					</ConsentSection>
				</form>
			</ContactPage>
		);
	}
}

export default General;
