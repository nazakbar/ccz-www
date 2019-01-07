import styled from 'styled-components';

import PhaseBreakdown from './phaseBreakdown';
import { PhasesBase, PhasesWithBreakdown } from './phases';
import { PageCenteredShort } from '../layouts';

const Underline = styled.svg `
	height: 1px;
	width: 100%;
	fill: #E5E5E5;
	margin: 4rem 0;

	@media (min-width: 57em) {
		margin: 6rem 0;
	}

	@media (min-width: 75em) {
		margin: 8rem 0;
	}

	@media (min-width: 112em) {
		margin: 10rem 0;
	}
`;

const Divider = () => (
	<Underline>
		<rect height="1px" width="100%" />
	</Underline>
);

const ProcessPhases = ({ theme, phase1, phase2, phase3, phase4, phase5, phase2Lists, phase3Lists }) => (
	<PageCenteredShort theme={{ main: `#FFF` }}>
		<PhasesBase theme={theme} {...phase1} />
		<Divider />
		<PhasesWithBreakdown theme={theme} {...phase2}>
			<PhaseBreakdown phase2Lists={phase2Lists} />
		</PhasesWithBreakdown>
		<Divider />
		<PhasesWithBreakdown theme={theme} phase3={phase3}>
			<PhaseBreakdown phase3Lists={phase3Lists} />
		</PhasesWithBreakdown>
		<Divider />
		<PhasesBase theme={theme} {...phase4} />
		<Divider />
		<PhasesBase theme={theme} {...phase5} />
	</PageCenteredShort>
);

export default ProcessPhases;
