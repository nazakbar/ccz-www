import styled from 'styled-components';

import { Link } from 'preact-router/match';

//All Headings resides here.
export const Heading1 = styled.h1 `
	font-size: 12vw;
	font-weight: 700;
	line-height: 1.08;
	letter-spacing: -0.6px;
	margin: 0;
	color: #000;

	@media (min-width: 32em) {
		font-size: 3rem;
		letter-spacing: -0.76px;
	}

	@media (min-width: 45em) {
		font-size: 3.5rem;
		letter-spacing: -0.88px;
	}

	@media (min-width: 57em) {
		font-size: 4rem;
		letter-spacing: -1.01px;
	}

	@media (min-width: 75em) {
		font-size: 5.625rem;
		letter-spacing: -1.42px;
	}

	@media (min-width: 112em) {
		font-size: 7rem;
		letter-spacing: -1.77px;
	}
`;

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

export const Heading3 = styled.h3 `
	font-size: 1.25rem;
	font-weight: 700;
	line-height: 1.2;
	letter-spacing: -0.55px;
	margin: 0 0 0.5rem;
	color: ${props => props.theme.main};
	text-align: ${props => props.theme.align};

	@media (min-width: 22em) {
		font-size: 1.375rem;
		line-height: 1.090909;
		letter-spacing: -0.6px;
	}

	@media (min-width: 45em) {
		font-size: 1.75rem;
		line-height: 1.142857;
		letter-spacing: -0.76px;
	}

	@media (min-width: 75em) {
		font-size: 2rem;
		line-height: 1;
		letter-spacing: -0.87px
	}

	@media (min-width: 112em) {
		font-size: 2.5rem;
		letter-spacing: -1.09px;
		margin: 0 0 1rem 0;
	}
`;

export const Heading4 = styled.h4 `
	font-size: 0.9375rem;
	font-weight: 700;
	line-height: 1;
	letter-spacing: -0.3px;
	margin: 0 0 0.5rem 0;
	color: ${props => props.theme.main};

	@media (min-width: 22em) {
		font-size: 1rem;
		letter-spacing: -0.32px;
	}

	@media (min-width: 45em) {
		font-size: 1.125rem;
		letter-spacing: -0.36px;
	}

	@media (min-width: 75em) {
		font-size: 1.25rem;
		letter-spacing: -0.4px;
	}

	@media (min-width: 112em) {
		font-size: 1.5rem;
		letter-spacing: -0.48px;
	}
`;

export const Heading5 = styled.h5 `
	font-size: 0.75rem;
	font-weight: 700;
	line-height: 1;
	letter-spacing: -0.24px;
	margin: 0.5rem 0 0;
	color: ${props => props.theme.main};
	align-self: flex-end;

	@media (min-width: 22em) {
		font-size: 0.875rem;
		letter-spacing: -0.28px;
	}

	@media (min-width: 75em) {
		font-size: 1rem;
		letter-spacing: -0.32px;
	}

	@media (min-width: 112em) {
		font-size: 1.125rem;
		letter-spacing: -0.36px;
	}
`;

export const Heading6 = styled.h6 `
	font-size: 0.9375rem;
	font-style: italic;
	font-weight: 400;
	line-height: 1;
	letter-spacing: -0.3px;
	margin: 0 0 1.5rem;
	color: ${props => props.theme.main};

	@media (min-width: 22em) {
		font-size: 1rem;
		letter-spacing: -0.32px;
	}

	@media (min-width: 45em) {
		font-size: 1.125rem;
		letter-spacing: -0.36px;
		margin: 0 0 2rem;
	}

	@media (min-width: 75em) {
		font-size: 1.25rem;
		letter-spacing: -0.4px;
		margin: 0 0 1.5rem;
	}

	@media (min-width: 112em) {
		font-size: 1.5rem;
		letter-spacing: -0.48px;
		margin: 0 0 4rem;
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

export const BodyCentered = styled(Body) `
	text-align: center;

	@media (min-width: 57em) {
		margin: 0 calc(((100vw - 28rem) / 12) + 2rem) 1.25rem;
	}

	@media (min-width: 75em) {
		margin: 0 calc((((100vw - 78rem) / 12) * 2) + 12rem) 1.5rem;
	}

	@media (min-width: 112em) {
		margin: 0 calc((((100vw - 78rem) / 12) * 2) + 12rem) 2rem;
	}
`;

//All Anchors resides here.
export const Anchor = styled(Link) `
	display: inline-flex;
	flex-direction: column;
	font-size: 0.875rem;
	font-weight: 700;
	line-height: 1;
	letter-spacing: -0.28px;
	text-align: center;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: #000;

	@media (min-width: 45em) {
		font-size: 1rem;
		letter-spacing: -0.32px;
	}

	@media (min-width: 75em) {
		font-size: 1.125rem;
		letter-spacing: -0.36px;
	}

	@media (min-width: 112em) {
		font-size: 1.25rem;
		letter-spacing: -0.4px;
	}
`;
