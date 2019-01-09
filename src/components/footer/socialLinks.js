import { SocialContainer, ExternalLinks } from './layouts';

const SocialLinks = () => (
	<SocialContainer>
		<ExternalLinks href="https://linkedin.com/company/concrezan/" aria-label="Linkedin" target="_black" rel="noopener">Linkedin</ExternalLinks>
		<ExternalLinks href="https://twitter.com/concrezan/" aria-label="Twitter" target="_black" rel="noopener">Twitter</ExternalLinks>
		<ExternalLinks href="https://www.instagram.com/concrezan/" aria-label="Instagram" target="_black" rel="noopener">Instagram</ExternalLinks>
	</SocialContainer>
);

export default SocialLinks;