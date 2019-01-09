import styled from 'styled-components';

const SocialContainer = styled.section `
	display: flex;
	flex-wrap: wrap;
	padding: 0.75rem;
	width: 100%;

	@media (min-width: 32em) {
		padding: 0.75rem 6rem;
	}
`;

const SocialTitle = styled.p `
	width: 100%;
	margin: 0 0 16px;
	font-size: 0.75rem;
	line-height: 1;
	text-align: center;
	color: #FFF;
`;

const SocialLink = styled.a `
	flex-grow: 1;
	line-height: 1.5;
	text-align: center;
	text-decoration: none;
	font-weight: 700;
	font-size: 0.75rem;
	color: #FFF;
`;

const SocialLinks = ({ onDismiss }) => (
	<SocialContainer>
		<SocialTitle>Follow Us</SocialTitle>
		<SocialLink href="https://linkedin.com/company/concrezan/" aria-label="Linkedin" target="_black" rel="noopener" onClick={onDismiss}>IN</SocialLink>
		<SocialLink href="https://twitter.com/concrezan/" aria-label="Twitter" target="_black" rel="noopener" onClick={onDismiss}>TW</SocialLink>
		<SocialLink href="https://www.instagram.com/concrezan/" aria-label="Instagram" target="_black" rel="noopener" onClick={onDismiss}>IG</SocialLink>
	</SocialContainer>
);

export default SocialLinks;