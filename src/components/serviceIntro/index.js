import styled from 'styled-components';

import { PageSection } from '../layouts';
import { Body } from '../typography';

const IntroBody = styled(Body) `
	@media (min-width: 57em) {
		margin: 0 calc(((100vw - 28rem)/ 12) + 2rem) 1.25rem;
	}

	@media (min-width: 75em) {
		margin: 0 calc((((100vw - 78rem) / 12) * 2) + 12rem) 1.5rem;
	}

	@media (min-width: 112em) {
		margin: 0 calc((((100vw - 78rem) / 12) * 3) + 18rem) 2rem;
	}
`;

const ServiceIntro = ({ theme, intro, intro1 }) => (
	<PageSection theme={theme}>
		<IntroBody>{intro}</IntroBody>
		<IntroBody>{intro1}</IntroBody>
	</PageSection>
);

export default ServiceIntro;