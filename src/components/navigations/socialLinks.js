import { Link } from 'preact-router/match';
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

const SocialLink = styled(Link) `
	flex-grow: 1;
	line-height: 1.5;
	text-align: center;
	text-decoration: none;
	font-weight: 700;
	font-size: 0.75rem;
	color: #FFF;
`;

const SocialLinks = () => (
	<SocialContainer>
		<SocialTitle>Follow Us</SocialTitle>
		<SocialLink href="/" aria-label="Linkedin">IN</SocialLink>
		<SocialLink href="/" aria-label="Twitter">TW</SocialLink>
		<SocialLink href="/" aria-label="Instagram">IG</SocialLink>
	</SocialContainer>
);

export default SocialLinks;