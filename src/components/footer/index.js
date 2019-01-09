import PolicyLinks from './policyLinks';
import HomeLink from './homeLink';
import SocialLinks from './socialLinks';

import { FooterContainer } from './layouts';

const Footer = ({ theme }) => (
	<FooterContainer theme={theme}>
		<PolicyLinks />
		<HomeLink />
		<SocialLinks />
	</FooterContainer>
);

export default Footer;