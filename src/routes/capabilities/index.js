import SectionHero from '../../components/sectionHero';
import Headlines from '../../components/headlines';
import SectionContact from '../../components/sectionContact';

import { heroShort, headlinesCards, headlinesCapabilities } from './content';

const Capabilities = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFF` }}
			heroShort={heroShort}
		/>
		<Headlines
			theme={{ main: `#FFF` }}
			{...headlinesCards}
		/>
		<Headlines
			theme={{ main: `#FFCA00` }}
			{...headlinesCapabilities}
		/>
		<SectionContact
			theme={{ main: `#FFF` }}
		/>
	</div>
);

export default Capabilities;