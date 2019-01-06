import SectionHero from '../../components/sectionHero';

import { heroShort } from './content';

const PrivacyPolicy = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFF` }}
			heroShort={heroShort}
		/>
	</div>
);

export default PrivacyPolicy;