import SectionHero from '../../components/sectionHero';
import SectionContact from '../../components/sectionContact';

import { heroShort } from './content';

const Design = () => (
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

export default Design;