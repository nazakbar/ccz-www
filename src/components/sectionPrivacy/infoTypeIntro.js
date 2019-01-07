import styled from 'styled-components';

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

const InfoTypeIntro = ({ theme, title, intro, intro1 }) => (
	<PageSection theme={theme}>
		<Heading2>{title}</Heading2>
		<Body>{intro}</Body>
		<Body>{intro1}</Body>
	</PageSection>
);

export default InfoTypeIntro;
