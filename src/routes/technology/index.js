import SectionHero from '../../components/sectionHero';
import SectionContact from '../../components/sectionContact';

import { heroShort } from './content';

const Technology = () => (
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

export default Technology;