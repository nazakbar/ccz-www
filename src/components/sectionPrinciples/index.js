import styled from 'styled-components';

import { PageSectionCentered } from '../layouts';
import { Heading3, Body } from '../typography';

const Heading3Principles = styled(Heading3) `
	margin-bottom: 1rem;

	@media (min-width: 57em) {
		margin-bottom: 1.25rem;
	}

	@media (min-width: 75em) {
		margin-bottom: 1.5rem;
	}

	@media (min-width: 112em) {
		margin-bottom: 2rem;
	}
`;

const SectionPrinciples = ({ theme, title, line, line1, line2, line3, line4 }) => (
	<PageSectionCentered theme={theme}>
		<Heading3Principles theme={{ main: `#FFF`, align: `center` }}>{title}</Heading3Principles>
		<Body theme={{ main: `#FFF`, align: `center` }}>{line}</Body>
		<Body theme={{ main: `#FFF`, align: `center` }}>{line1}</Body>
		<Body theme={{ main: `#FFF`, align: `center` }}>{line2}</Body>
		<Body theme={{ main: `#FFF`, align: `center` }}>{line3}</Body>
		<Body theme={{ main: `#FFF`, align: `center` }}>{line4}</Body>
	</PageSectionCentered>
);

export default SectionPrinciples;
