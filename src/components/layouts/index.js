import styled from 'styled-components';

export const PageSection = styled.section `
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 24vh 1.5em;
	background-color: ${props => props.theme.main};

	@media (min-width: 45em) {
		padding: 24vh 3em;
	}

	@media (min-width: 75em) {
		padding: 24vh 6em;
	}
`;

/**TODO
 * Combine this back into PageSection as Heading 3 did using props.
 * Make sure all other components dependent on this are checked and changed as well before moving forward.
 */
export const PageSectionCentered = styled(PageSection) `
	align-items: center;
	justify-content: center;
`;
