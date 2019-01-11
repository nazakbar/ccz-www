import Helmet from 'preact-helmet';
import SectionHero from '../../components/sectionHero';
import TermsIntro from '../../components/sectionTerms/termsIntro';
import SectionTerms from '../../components/sectionTerms';

import { heroShort, termsIntro, termsLists } from './content';

const TermsOfUse = () => (
	<div>
		<Helmet
			title="Concrezan | Terms of Use"
			meta={[{
				name: 'description',
				content: `Please read these Terms of Use carefully as they contain important information about your legal rights, remedies, and obligations.`
			}]}
		/>
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