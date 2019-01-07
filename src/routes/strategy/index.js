import SectionHero from '../../components/sectionHero';
import SectionContact from '../../components/sectionContact';

import { heroShort } from './content';

const Strategy = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFCA00` }}
			heroShort={heroShort}
		/>
		<SectionContact
			theme={{ main: `#FFCA00` }}
		/>
	</div>
);

export default Strategy;