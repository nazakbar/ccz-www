import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes `
	0% {
		opacity: 0;
	}
`;

const GetIn = keyframes `
	0% {
		opacity: 0;
		transform: translate(0%, 50%);
	}
`;

const GetInTop = keyframes `
	0% {
		transform: translate(0%, -50%);
	}
`;

const FullNavContainer = styled.div `
	display: none;

	&.unfold {
		display: block;
	}
`;

const Scrim = styled.div `
	position: fixed;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	background: rgba(5,0,63,0.8);
	animation: ${fadeIn} 300ms ease forwards 1;
	cursor: no-drop;
`;

const Sheet = styled.div `
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	transform: translate(0%, 0%);
	background: rgba(7,0,90,1);
	box-shadow: 0 0.625rem 1.875rem rgba(0,0,0,0.3);
	animation: ${GetIn} 300ms ease forwards 1;

	@media (min-width: 32em) {
		bottom: auto;
		top: 0;
		animation: ${GetInTop} 300ms ease forwards 1;
	}
`;

const Navigations = ({ unfold, onDismiss, children }) => (
	<FullNavContainer className={unfold ? ' unfold' : ''} >
		<Scrim onClick={onDismiss} />
		<Sheet>{ children }</Sheet>
	</FullNavContainer>
);

export default Navigations;
