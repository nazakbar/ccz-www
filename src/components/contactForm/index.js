import Input from './inputGroup';

const ContactForm = ({ firstName, lastName, email, company, title, country }) => (
	<form>
		<fieldset>
			<Input type="text" name="firstName" value={firstName} onInput={firstName}>First Name</Input>
			<Input type="text" name="lastName" value={lastName} onInput={lastName}>Last Name</Input>
			<Input type="email" name="email" value={email} onInput={email}>Email</Input>
			<Input type="text" name="company" value={company} onInput={company}>Company</Input>
			<Input type="text" name="title" value={title} onInput={title}>Title</Input>
			<Input type="text" name="country" value={country} onInput={country}>Country</Input>
		</fieldset>
	</form>
);

export default ContactForm;