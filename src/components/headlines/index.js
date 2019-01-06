import styled from 'styled-components';

import { PageSectionCentered } from '../layouts';
import { Heading2 } from '../typography';

const HeadLinesTags = styled(Heading2) `
	text-align: center;
	margin: 0;

	@media (min-width: 45em) {
		margin: 0 calc(((100vw - 20rem) / 8) + 2rem);
	}

	@media (min-width: 57em) {
		margin: 0 calc(((100vw - 28rem) / 12) + 2rem);
	}

	@media (min-width: 75em) {
		margin: 0 calc((((100vw - 78rem) / 12) * 2) + 12rem);
	}
`;

const HeadLinesTagsShort = styled(HeadLinesTags) `
	@media (min-width: 57em) {
		margin: 0 calc((((100vw - 28rem) / 12) * 3) + 6rem);
	}

	@media (min-width: 75em) {
		margin: 0 calc((((100vw - 78rem) / 12) * 3) + 16rem);
	}
`;

const Headlines = ({ headLinesShort, theme, tag }) => {
	if (!headLinesShort) {
		return (
			<PageSectionCentered theme={theme}>
				<HeadLinesTags>{tag}</HeadLinesTags>
			</PageSectionCentered>
		);
	}

	return (
		<PageSectionCentered theme={theme}>
			<HeadLinesTagsShort>{headLinesShort.tag}</HeadLinesTagsShort>
		</PageSectionCentered>
	);
};

export default Headlines;
