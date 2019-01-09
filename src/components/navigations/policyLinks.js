import { Link } from 'preact-router/match';
import styled from 'styled-components';

const PolicyContainer = styled.section `
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0.75rem 1.5rem 1.5rem;
`;

const PolicyLink = styled(Link) `
	display: inline-block;
	height: 1.5rem;
	text-decoration : none;
	font-size: 0.75rem;
	font-weight: 400;
	line-height: 1;
	color: #FFF;
`;

const PolicyLinks = ({ onDismiss }) => (
	<PolicyContainer>
		<PolicyLink href="/terms-of-use" aria-label="terms of use" onClick={onDismiss}>Terms of Use</PolicyLink>
		<PolicyLink href="/privacy-policy" aria-label="privacy policy" onClick={onDismiss}>Privacy Policy</PolicyLink>
	</PolicyContainer>
);

export default PolicyLinks;
