import SectionHero from '../../components/sectionHero';
import Headlines from '../../components/headlines';

import { heroShort, headlinesShort } from './content';

const Process = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFF` }}
			heroShort={heroShort}
		/>
		<Headlines
			theme={{ main: `#FFCA00` }}
			headLinesShort={headlinesShort}
		/>
	</div>
);

export default Process;