import styled from 'styled-components';

import MultiLinks from '../multiLinks';
import { PageSection } from '../layouts';
import { Body } from '../typography';

const LinkedIntro = styled(Body) `
	margin: 0 0 1rem;

	@media (min-width: 45em) {
		margin: 0 calc(((100vw - 20rem) / 8) + 2rem) 1.125rem 0;
	}

	@media (min-width: 57em) {
		margin: 0 calc(((100vw - 28rem) / 12) + 2rem) 1.125rem;
	}

	@media (min-width: 75em) {
		margin: 0 calc((((100vw - 78rem) / 12) * 5) + 24rem) 1.5rem 0;
	}
`;

const SectionLinked = ({ theme, intro, href, href1, label, label1, link, link1 }) => (
	<PageSection theme={theme}>
		<LinkedIntro>{intro}</LinkedIntro>
		<MultiLinks
			href={href}
			href1={href1}
			label={label}
			label1={label1}
			link={link}
			link1={link1}
		/>
	</PageSection>
);

export default SectionLinked;