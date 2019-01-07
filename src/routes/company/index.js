import SectionHero from '../../components/sectionHero';
import Headlines from '../../components/headlines';
import SectionContact from '../../components/sectionContact';

import { heroLong, headlinesShort } from './content';

const Company = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFF` }}
			{...heroLong}
		/>
		<Headlines
			theme={{ main: `#FFCA00` }}
			headLinesShort={headlinesShort}
		/>
		<SectionContact
			theme={{ main: `#FFF` }}
		/>
	</div>
);

export default Company;