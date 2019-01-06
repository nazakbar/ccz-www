import styled from 'styled-components';

import { Anchor } from '../typography';

const LinksContainer = styled.div `
	margin: 2rem 0 0;

	@media (min-width: 45em) {
		margin: 1.875rem calc(((100vw - 20rem) / 8) + 2rem) 0 0;
	}

	@media (min-width: 57em) {
		margin: 2.875rem calc(((100vw - 28rem) / 12) + 2rem) 0;
	}

	@media (min-width: 75em) {
		margin: 4rem calc((((100vw - 78rem) / 12) * 5) + 24rem) 0 0;
	}

	> ${Anchor} {
		margin: 0 1.5rem 0 0;

		@media (min-width: 22em) {
			margin: 0 2rem 0 0;
		}

		@media (min-width: 45em) {
			margin: 0 3rem 0 0;
		}

		@media (min-width: 75em) {
			margin: 0 4rem 0 0;
		}
	}
`;

const MultiLinks = ({ href, href1, label, label1, link, link1 }) => (
	<LinksContainer>
		<Anchor href={href} aria-label={label}>{link}</Anchor>
		<Anchor href={href1} aria-label={label1}>{link1}</Anchor>
	</LinksContainer>
);

export default MultiLinks;