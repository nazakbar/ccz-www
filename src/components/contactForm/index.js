import { Link } from 'preact-router/match';
import styled from 'styled-components';

import { bodyFonts } from '../../utils/fonts';
import { Heading2 } from '../typography';

export const ContactPage = styled.div `
	width: 100%;
	padding: 88px 24px;
	background: #07005A;

	@media (min-width: 45em) {
		padding: 128px 48px;
	}

	@media (min-width: 75em) {
		padding: 208px 96px;
	}
`;

export const TitleSection = styled.section `
	margin: 0 0 24px;
	padding: 0;

	@media (min-width: 45em) {
		margin: 0 0 64px;
	}
`;

export const BackLink = styled(Link) `
	display: inline-flex;
	align-items: center;
	text-decoration: none;
	font-size: 0.875rem;
	font-weight: 700;
	line-height: 1;
	color: #FFF;

	@media (min-width: 45em) {
		font-size: 1rem;
	}

	@media (min-width: 75em) {
		font-size: 1.125rem;
	}
`;

export const ContactTitle = styled(Heading2) `
	margin: 88px 0 0;

	@media (min-width: 45em) {
		margin: 128px 0 0;
	}
`;

export const Labels = styled.label `
	font-size: 0.9375rem;
	font-weight: 400;
	line-height: 1;
	letter-spacing: -0.3px;
	margin: 0;
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

export const Fieldsets = styled.fieldset `
	border: none;
	margin: 0 0 48px;
	padding: 0;

	@media (min-width: 45em) {
		padding: 0 calc(((100vw - 20rem) / 8) + 2rem);
	}
	
	@media (min-width: 75em) {
		padding: 0 calc((((100vw - 78rem) / 12) * 2) + 12rem);
	}
`;

export const RadioContainer = styled.div `
	display: flex;
	align-items: center;
	margin: 0 0 0.5rem;
	padding: 0.5rem 0;

	@media (min-width: 45em) {
		padding: 1rem 0;
	}

	@media (min-width: 75em) {
		padding: 1rem 0;
	}

	:last-child {
		margin: 0;
	}
`;

export const RadioInput = styled.input `
	height: 16px;
	width: 16px;
	margin: 0 8px 0 0;
	appearance: none;
	outline: none;
	border-radius: 50%;
	border: 2px solid rgba(255, 255, 255, 0.3);
	transition: 200ms all linear;

	:checked {
		border: 3px solid rgba(255, 202, 0, 1);
	}
`;

export const InputContainer = styled.div `
	display: flex;
	flex-direction: column;
	padding:0;
	margin: 0 0 24px;
`;

export const InputLabel = styled(Labels) `
	margin: 0 0 1rem;

	@media (min-width: 45em) {
		margin: 0 0 1.25rem;
	}

	@media (min-width: 75em) {
		margin: 0 0 1.5rem;
	}

	@media (min-width: 112em) {
		margin: 0 0 2rem;
	}
`;

export const TextArea = styled.textarea `
	font-size: 0.875rem;
	line-height: 1.6;
	letter-spacing: -0.28px;
	padding: 8px;
	border: none;
	outline: none;
	resize: none;
	caret-color: #FFCA00;
	color: #FFF;
	transition: 225ms;
	background: rgba(255, 255, 255, 0.1);

	:focus {
		border-bottom: 3px solid rgba(255, 202, 0, 1);
	}

	@media (min-width: 45em) {
		font-size: 1rem;
		letter-spacing: -0.32px;
	}

	@media (min-width: 75em) {
		font-size: 1.125rem;
		letter-spacing: -0.36px;
	}
`;

export  const TextInput = styled.input `
	font-size: 0.875rem;
	line-height: 1.6;
	letter-spacing: -0.28px;
	padding: 8px;
	border: none;
	outline: none;
	caret-color: #FFCA00;
	color: #FFF;
	transition: 225ms;
	background: rgba(255, 255, 255, 0.1);

	:focus {
		border-bottom: 3px solid rgba(255, 202, 0, 1);
	}

	@media (min-width: 45em) {
		font-size: 1rem;
		letter-spacing: -0.32px;
	}

	@media (min-width: 75em) {
		font-size: 1.125rem;
		letter-spacing: -0.36px;
	}
`;

export const CheckboxContainer = styled.div `
	display: flex;
`;

export const Checkbox = styled.input `
	height: 16px;
	width: 16px;
	margin: 3px 8px 0 0;

	@media (min-width: 45em) {
		margin: 6px 8px 0 0;
	}

	@media (min-width: 75em) {
		margin: 8px 8px 0 0;
	}
`;

export const CheckboxLabel = styled(Labels) `
	line-height: 1.6;
`;

export const ConsentSection = styled.section `
	margin: 0;
	padding: 0;

	@media (min-width: 45em) {
		padding: 0 calc(((100vw - 20rem) / 8) + 2rem);
	}

	@media (min-width: 75em) {
		padding: 0 calc((((100vw - 78rem) / 12) * 2) + 12rem);
	}
`;

export const PrivacyLink = styled(Link) `
	display: inline-flex;
	align-items: center;
	font-size: inherit;
	font-weight: 700;
	line-height: inherit;
	letter-spacing: inherit;
	color: inherit;
`;

export const ButtonSubmit = styled.button `
	width: 100%;
	padding: 1rem 0;
	outline: none;
	border: none;
	font-family: ${bodyFonts};
	font-size: 0.875rem;
	font-weight: 700;
	letter-spacing: -0.28px;
	background: #FFCA00;
	margin: 64px 0 0;

	@media (min-width: 45em) {
		font-size: 1rem;
		letter-spacing: -0.32px;
		margin: 88px 0 0;
	}

	@media (min-width: 75em) {
		font-size: 1.125rem;
		letter-spacing: -0.36px;
		padding: 1rem 0;
	}
`;
