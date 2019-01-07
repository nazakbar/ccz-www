import styled from 'styled-components';

import { PageSectionCentered } from '../layouts';
import { Heading2, Anchor } from '../typography';

const ContactTag = styled(Heading2) `
	margin: 0 0 4rem;
	text-align: center;

	@media (min-width: 45em) {
		margin: 0 calc(((100vw - 20rem) / 8) + 2rem) 5.5rem;
	}

	@media (min-width: 57em) {
		margin: 0 calc((((100vw - 28rem) / 12) * 3) + 6rem) 5.5rem;
	}

	@media (min-width: 75em) {
		margin: 0 calc((((100vw - 78rem) / 12) * 3) + 18rem) 5.5rem;
	}

	@media (min-width: 112em) {
		margin: 0 calc((((100vw - 78rem) / 12) * 3) + 18rem) 8.5rem;
	}
`;

const contactSection = {
	tag: `Want to reshape the future together?`,
	href: `/contact`,
	label: `Let's talk, contact us today.`,
	link: `Let's Talk.`
};

const SectionContact = ({ theme }) => (
	<PageSectionCentered theme={theme}>
		<ContactTag>{contactSection.tag}</ContactTag>
		<Anchor href={contactSection.href} aria-label={contactSection.label} >{contactSection.link}</Anchor>
	</PageSectionCentered>
);

export default SectionContact;
