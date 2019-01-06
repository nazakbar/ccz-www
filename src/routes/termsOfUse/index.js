import SectionHero from '../../components/sectionHero';

import { heroShort } from './content';

const TermsOfUse = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFF` }}
			heroShort={heroShort}
		/>
	</div>
);

export default TermsOfUse;