import { Link } from 'preact-router/match';
import styled from 'styled-components';

const NavContainer = styled.nav `
	display: flex;
	flex-direction: column-reverse;
	width: 100%;
	padding: 0.75rem 1.5rem;

	@media (min-width: 32em) {
		flex-direction: row;
		flex-wrap: wrap;
		padding: 0.75rem 7rem;
	}

	@media (min-width: 57em) {
		width: auto;
		padding: 0.75rem 1.5rem;
	}
`;

const PageLink = styled(Link) `
	display: inline-block;
	height: 2rem;
	line-height: 1;
	margin: 0.5rem 0;
	text-align: center;
	text-decoration: none;
	font-size: 1.25rem;
	font-weight: 700;
	width: 100%;
	color: #FFF;

	@media (min-width: 32em) {
		max-width: 50%;
	}

	@media (min-width: 57em) {
		height: auto;
		width: auto;
		margin: 0 3rem 0 0;
		color: #999;

		:last-child {
			margin: 0;
		}
	}
`;

const PageLinks = ({ className, onDismiss }) => (
	<NavContainer className={className} >
		<PageLink href="/capabilities" aria-label="capabilities" onClick={onDismiss}>Capabilities</PageLink>
		<PageLink href="/company" aria-label="company" onClick={onDismiss}>Company</PageLink>
		<PageLink href="/process" aria-label="process" onClick={onDismiss}>Process</PageLink>
		<PageLink href="/contact" aria-label="contact" onClick={onDismiss}>Contact</PageLink>
	</NavContainer>
);

export default PageLinks;
