import { Link } from 'preact-router/match';
import styled from 'styled-components';

import { PageSectionCentered } from '../layouts';
import { Heading3, Heading4, Heading5, Body } from '../typography';

const AnchorCards = styled(Link) `
	display: flex;
	flex-direction: column;
	text-decoration: none;
	width: 100%;
	min-height: 13.5rem;
	margin: 0 0 1rem;
	padding: 1rem;
	background-color: #07005A;

	> ${Body} {
		flex-grow: 1;
	}

	> ${Heading5} {
		margin: 0;
	}

	@media (min-width: 22em) {
		padding: 1.5rem;
	}

	@media (min-width: 45em) {
		padding: 2rem;
	}

	@media (min-width: 75em) {
		min-height: 14.75rem;
		padding: 3rem;
	}

	@media (min-width: 112em) {
		min-height: 19.5rem;
		padding: 4rem;
		margin: 0 0 1.5rem 0;
	}

	:last-child {
		margin: 0;
	}
`;

const CardsContainer = styled.div `
	display: flex;
	width: 100%;
	margin: 1rem 0 0;

	@media (min-width: 22em) {
		margin: 1.5rem 0 0;
	}

	@media (min-width: 75em) {
		margin: 3rem 0 0;
	}

	> ${AnchorCards} {
		display: flex;
		flex: 1 0 40%;
		min-height: auto;
		margin: 0 1rem 0 0;

		@media (min-width: 45em) {
			margin-right: 2rem;
		}

		@media (min-width: 75em) {
			margin-right: 6rem;
		}

		:last-child {
			margin: 0;
		}
	}

	> ${AnchorCards} > ${Heading4} {
		align-self: center;
		text-align: center;
	}

	> ${AnchorCards} > ${Heading5} {
		align-self: center;
		text-align: center;
	}

	> ${AnchorCards} > ${Body} {
		display: none;
	}

	@media (min-width: 45em) {
		> ${AnchorCards} > ${Heading4} {
			align-self: flex-start;
			text-align: left;
		}

		> ${AnchorCards} > ${Heading5} {
			align-self: flex-end;
			text-align: right;
		}

		> ${AnchorCards} > ${Body} {
			display: block;
			flex-grow: 1;
		}
	}
`;

const title = {
	title: `See our other capabilities.`
};

const Cards = ({ title, brief, href, label, link }) => (
	<AnchorCards href={href} aria-label={label}>
		<Heading4 theme={{ main: `#FFF` }}>{title}</Heading4>
		<Body theme={{ main: `#FFF` }}>{brief}</Body>
		<Heading5 theme={{ main: `#FFF` }}>{link}</Heading5>
	</AnchorCards>
);

const CardsPager = ({ capabilities, capabilities1 }) => (
	<PageSectionCentered theme={{ main: `#FFF` }}>
		<Heading3 theme={{ align: `center` }}>{title}</Heading3>
		<CardsContainer>
			<Cards {...capabilities} />
			<Cards {...capabilities1} />
		</CardsContainer>
	</PageSectionCentered>
);

export default CardsPager;