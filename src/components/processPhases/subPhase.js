import styled from 'styled-components';

import { Heading4, BodyCentered } from '../typography';

const SubPhaseBase = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem 0 0;

	@media (min-width: 22em) {
		margin: 3rem 0 0;
	}

	@media (min-width: 57em) {
		margin: 4rem 0 0;
	}
`;

const SubPhaseBreakdown = styled(SubPhaseBase) `
	> ${BodyCentered} {
		flex-grow: 1;
		margin: 0;
	}

	@media (min-width: 45em) {
		flex: 1 0 40%;
		margin: 0 2rem 0 0;

		:last-child {
			margin: 3rem calc((((100vw - 22rem) / 8) * 2) + 4rem) 0;
		}

		:nth-child(even) {
			margin: 0;
		}
	}

	@media (min-width: 57em) {
		flex: 1 0 20%;
		margin: 0 calc(((100vw - 28rem) / 12) + 2rem) 0;

		:last-child {
			margin: 4rem calc((((100vw - 28rem) / 12) * 4) + 8rem) 0;
		}

		:nth-child(even) {
			margin: 0 calc(((100vw - 28rem) / 12) + 2rem) 0 0;
		}
	}

	@media (min-width: 75em) {
		:first-child {
			margin: 0 6rem 0 calc((((100vw - 78rem) / 12) * 2) + 12rem);
		}

		:nth-child(even) {
			margin: 0 calc((((100vw - 78rem) / 12) * 2) + 12rem) 0 0;
		}

		:last-child {
			margin: 4rem calc((((100vw - 78rem) / 12) * 4) + 24rem) 0;
		}
	}
`;

export const SubPhase = ({ title, brief }) => (
	<SubPhaseBase>
		<Heading4>{title}</Heading4>
		<BodyCentered>{brief}</BodyCentered>
	</SubPhaseBase>
);

export const SubPhaseMore = ({ title, brief }) => (
	<SubPhaseBreakdown>
		<Heading4>{title}</Heading4>
		<BodyCentered>{brief}</BodyCentered>
	</SubPhaseBreakdown>
);
