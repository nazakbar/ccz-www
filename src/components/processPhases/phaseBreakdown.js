import styled from 'styled-components';

import { SubPhase, SubPhaseMore } from './subPhase';

const SubPhaseContainer = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media (min-width: 45em) {
		justify-content: flex-start;
		align-items: flex-start;
		flex-flow: row wrap;
		margin: ${props => props.theme.size};
	}
`;

const PhaseBreakdown = ({ phase2Lists, phase3Lists }) => {
	if (!phase2Lists) {
		return (
			<SubPhaseContainer theme={{  main: `#FFF`, size: `0` }}>
				{phase3Lists.map((phase3List) => <SubPhase {...phase3List} />)}
			</SubPhaseContainer>
		);
	}

	return (
		<SubPhaseContainer theme={{  main: `#FFF`, size: `4rem 0 0` }}>
			{phase2Lists.map((phase2List) => <SubPhaseMore {...phase2List} />)}
		</SubPhaseContainer>
	);
};

export default PhaseBreakdown;