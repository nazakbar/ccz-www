import styled from 'styled-components';

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
`;