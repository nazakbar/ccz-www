import styled from 'styled-components';

import { Heading3, Body } from '../typography';
import InfoType from './infoType';

const PageSection = styled.section `
	display: flex;
	flex-direction: column;
	padding: 2em 1.5em 0;
	background-color: ${props => props.theme.main};

	@media (min-width: 45em) {
		padding: 3em 3em 0;
	}

	@media (min-width: 75em) {
		padding: 4em 6em 0;
	}

	:last-child {
		padding-bottom: 24vh;
	}
`;

const Type = ({ infoTitle, theme, infoListTitle, infoLists }) => {

	if (!infoTitle) {
		return (
			<PageSection theme={theme}>
				<Heading3>{infoListTitle.title}</Heading3>
				{infoLists.map((infoList) => <InfoType {...infoList} />)}
			</PageSection>
		);
	}

	return (
		<PageSection theme={theme}>
			<Heading3>{infoTitle.title}</Heading3>
			<Body>{infoTitle.brief}</Body>
		</PageSection>
	);
};

export default Type;