import styled from 'styled-components';

import { Heading4, Body } from '../typography';

const InfoContainer = styled.div `
	display: flex;
	flex-direction: column;
	padding: 1em 0;

	@media (min-width: 45em) {
		padding: 2em 0;
	}

	@media (min-width: 75em) {
		padding: 1em 0;
	}
`;

const InfoType = ({ title, brief }) => (
	<InfoContainer>
		<Heading4>{title}</Heading4>
		<Body>{brief}</Body>
	</InfoContainer>
);

export default InfoType;