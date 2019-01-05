import styled from 'styled-components';

//All Headings resides here.
export const Heading2 = styled.h2 `
	font-size: 1.25rem;
	font-weight: 700;
	line-height: 1.2;
	letter-spacing: -0.55px;
	margin: 0 0 1rem;
	color: ${props => props.theme.main};

	@media (min-width: 22em) {
		font-size: 1.6875rem;
		letter-spacing: -0.74px;
	}

	@media (min-width: 45em) {
		font-size: 2.3125rem;
		line-height: 1.081081;
		letter-spacing: -1.01px;
	}

	@media (min-width: 75em) {
		font-size: 2.8125rem;
		letter-spacing: -1.23px;
	}

	@media (min-width: 112em) {
		font-size: 4rem;
		line-height: 1;
		letter-spacing: -1.75px;
	}
`;

//All Body resides here.
export const Body = styled.p `
	font-size: 0.9375rem;
	font-weight: 400;
	line-height: 1.6;
	letter-spacing: -0.3px;
	margin: 0 0 1rem;
	color: ${props => props.theme.main};

	@media (min-width: 22em) {
		font-size: 1rem;
		letter-spacing: -0.32px;
	}

	@media (min-width: 45em) {
		font-size: 1.125rem;
		letter-spacing: -0.36px;
		margin: 0 0 1.25rem;
	}

	@media (min-width: 75em) {
		font-size: 1.25rem;
		letter-spacing: -0.4px;
		margin: 0 0 1.5rem;
	}

	@media (min-width: 112em) {
		font-size: 1.5rem;
		letter-spacing: -0.48px;
		margin: 0 0 2rem;
	}

	:last-child {
		margin-bottom: 0;
	}
`;
