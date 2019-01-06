import styled from 'styled-components';

import MultiLinks from '../multiLinks';
import { Heading1, Body } from '../typography';

export const PageHero = styled.section `
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: calc(100vh - 1em);
	width: 100%;
	padding: 0 1.5em 10em;
	background-color: ${props => props.theme.main};

	@media (min-width: 32em) {
		height: calc(100vh - 0.5em);
		padding: 0 1.5em 16.6667vh
	}

	@media (min-width: 45em) {
		padding: 0 3em 25vh;
	}

	@media (min-width: 75em) {
		padding: 0 6em 20vh;
	}

	> div {
		@media (min-width: 57em) {
			margin: 2.875rem 0 0;
		}
	}
`;

export const PageTitle = styled(Heading1) `
	margin: 0 calc(((100vw - 6rem) / 4) + 1rem) 1rem 0;

	@media (min-width: 32em) {
		margin: 0 0 1rem;
	}
`;

export const SubTitle = styled(Body) `
	@media (min-width: 45em) {
		margin: 0 calc(((100vw - 20rem) / 8) + 2rem) 1.25rem 0;
	}

	@media (min-width: 57em) {
		margin: 0 calc((((100vw - 28rrem)/ 12) * 4) + 8rem) 1.25rem 0;
	}

	@media (min-width: 75em) {
		margin: 0 calc((((100vw - 78rem) / 12) * 4) + 24rem) 1.5rem 0;
	}

	@media (min-width: 112em) {
		margin: 0 calc((((100vw - 78rem) / 12) * 6) + 36rem) 2rem 0;
	}

	:last-child {
		margin-bottom: 0;
	}
`;