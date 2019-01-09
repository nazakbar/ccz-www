import { Link } from 'preact-router';
import styled from 'styled-components';

export const FooterContainer = styled.section `
	display: flex;
	width: 100%;
	padding: 0 1em 0.5em;
	background-color: ${props => props.theme.main};

	@media (min-width: 45em) {
		padding: 0 3em 1em;
	}

	@media (min-width: 75em) {
		padding: 1em 6em;
	}
`;

export const PolicyContainer = styled.div `
	display: none;

	@media (min-width: 57em) {
		display: flex;
		flex: 1 0 30%;
	}
`;

export const HomeContainer = styled.div `
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media (min-width: 57em) {
		flex: 1 0 30%;
	}
`;

export const SocialContainer = styled.div `
	display: none;

	@media (min-width: 57em) {
		display: flex;
		flex: 1 0 30%;
		justify-content: flex-end;
	}
`;

export const FooterLinks = styled(Link) `
	display: inline-flex;
	text-decoration: none;
	font-size: 0.875rem;
	font-weight: 400;
	letter-spacing: -0.28px;
	line-height: 1;
	margin: 0 1.5rem 0 0;
	padding: 1em 0;
	color: #000;

	@media (min-width: 45em) {
		font-size: 1rem;
		letter-spacing: -0.32px;
	}

	@media (min-width: 75em) {
		margin: 0 3rem 0 0;
		padding: 2em 0;
	}

	:last-child {
		margin: 0;
	}
`;

export const ExternalLinks = styled.a `
	display: inline-flex;
	text-decoration: none;
	font-size: 0.875rem;
	font-weight: 400;
	letter-spacing: -0.28px;
	line-height: 1;
	margin: 0 1.5rem 0 0;
	padding: 1em 0;
	color: #000;

	@media (min-width: 45em) {
		font-size: 1rem;
		letter-spacing: -0.32px;
	}

	@media (min-width: 75em) {
		margin: 0 3rem 0 0;
		padding: 2em 0;
	}

	:last-child {
		margin: 0;
	}
`;