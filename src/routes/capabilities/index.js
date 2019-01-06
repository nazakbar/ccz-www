import SectionHero from '../../components/sectionHero';
import Headlines from '../../components/headlines';

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
	</div>
);

export default Capabilities;