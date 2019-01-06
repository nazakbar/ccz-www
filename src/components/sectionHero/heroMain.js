import styled from 'styled-components';

import { Heading1 } from '../typography';
import { PageHero } from './layouts';

const MainTitle = styled(Heading1) `
	@media (min-width: 57em) {
		margin: 0 calc((((100vw - 28rem) / 12) * 2) + 4rem) 0 0;
	}

	@media (min-width: 75em) {
		margin: 0 calc((((100vw - 78rem) / 12) * 1) + 6rem) 0 0;
	}

	@media (min-width: 112em) {
		margin: 0 calc((((100vw - 78rem)/ 12) * 3) + 18rem) 0 0;
	}
`;

const HeroMain = ({ theme, title }) => (
	<PageHero theme={theme}>
		<MainTitle>{title}</MainTitle>
	</PageHero>
);

export default HeroMain;