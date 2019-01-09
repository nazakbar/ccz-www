import { PolicyContainer, FooterLinks } from './layouts';

const PolicyLinks = () => (
	<PolicyContainer>
		<FooterLinks href="/terms-of-use" aria-label="Terms of Use">Terms of Use</FooterLinks>
		<FooterLinks href="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</FooterLinks>
	</PolicyContainer>
);

export default PolicyLinks;