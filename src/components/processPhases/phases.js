import styled from 'styled-components';

import { Heading3, Heading6, BodyCentered } from '../typography';

const PhaseContainer = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 0;
`;

export const PhasesBase = ({ theme, order, title, brief }) => (
	<PhaseContainer>
		<Heading6>{order}</Heading6>
		<Heading3 theme={theme}>{title}</Heading3>
		<BodyCentered>{brief}</BodyCentered>
	</PhaseContainer>
);

export const PhasesWithBreakdown = ({ theme, phase3, order, title, brief, brief1, children }) => {
	if (!phase3) {
		return (
			<PhaseContainer>
				<Heading6>{order}</Heading6>
				<Heading3 theme={theme}>{title}</Heading3>
				<BodyCentered>{brief}</BodyCentered>
				<BodyCentered>{brief1}</BodyCentered>
				{children}
			</PhaseContainer>
		);
	}

	return (
		<PhaseContainer>
			<Heading6>{phase3.order}</Heading6>
			<Heading3 theme={theme}>{phase3.title}</Heading3>
			<BodyCentered>{phase3.brief}</BodyCentered>
			{children}
		</PhaseContainer>
	);
};
