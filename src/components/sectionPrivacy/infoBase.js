import styled from 'styled-components';
import { Link } from 'preact-router/match';

import { Heading2, Body } from '../typography';

const PageSection = styled.section `
	display: flex;
	flex-direction: column;
	padding: 2em 1.5em 0;
	background-color: ${props => props.theme.main};

	@media (min-width: 45em) {
		padding: 3em 3em 0;
	}

	@media (min-width: 75em) {
		padding: 4em 6em 0;
	}

	:last-child {
		padding-bottom: 24vh;
	}
`;

const ContactLink = styled(Link) `
	display: inline-flex;
	align-items: center;
	font-size: inherit;
	font-weight: 700;
	line-height: inherit;
	letter-spacing: inherit;
	color: inherit;
`;

const InfoBase = ({ infoContact, theme, title, brief }) => {
	if (!infoContact) {
		return (
			<PageSection theme={theme}>
				<Heading2>{title}</Heading2>
				<Body>{brief}</Body>
			</PageSection>
		);
	}

	return (
		<PageSection theme={theme}>
			<Heading2>{infoContact.title}</Heading2>
			<Body>
				{infoContact.brief}
				<ContactLink href={infoContact.href} aria-label={infoContact.label}>{infoContact.link}</ContactLink>
			</Body>
		</PageSection>
	);
};

export default InfoBase;