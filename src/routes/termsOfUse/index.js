import SectionHero from '../../components/sectionHero';
import TermsIntro from '../../components/sectionTerms/termsIntro';
import SectionTerms from '../../components/sectionTerms';

import { heroShort, termsIntro, termsLists } from './content';

const TermsOfUse = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFF` }}
			heroShort={heroShort}
		/>
		<TermsIntro
			theme={{ main: `#FFF` }}
			{...termsIntro}
		/>
		<SectionTerms
			theme={{ main: `#FFF` }}
			termsLists={termsLists}
		/>
	</div>
);

export default TermsOfUse;