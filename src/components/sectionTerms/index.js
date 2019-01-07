import styled from 'styled-components';

import { PageSection } from '../layouts';
import { Heading3, Body } from '../typography';

const TermsSection = styled(PageSection) `
	padding: 0 1.5em 24vh;

	@media (min-width: 45em) {
		padding: 0 3em 24vh;
	}

	@media (min-width: 75em) {
		padding: 0 6em 24vh;
	}
`;

const TermsContainer = styled.div `
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 0 4rem 0;

	@media (min-width: 75em) {
		margin: 0 0 6rem 0
	}

	:last-child {
		margin: 0;
	}
`;

const TermsLists = ({ termsList }) => (
	<TermsContainer>
		<Heading3>{termsList.title}</Heading3>
		<Body>{termsList.brief}</Body>
	</TermsContainer>
);

const Terms = ({ termsLists }) => (
	<section>
		{termsLists.map((termsList) => <TermsLists termsList={termsList} />)}
	</section>
);

const SectionTerms = ({ theme, termsLists }) => (
	<TermsSection theme={theme}>
		<Terms termsLists={termsLists} />
	</TermsSection>
);

export default SectionTerms;
