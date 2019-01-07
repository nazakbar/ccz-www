import SectionHero from '../../components/sectionHero';
import Headlines from '../../components/headlines';
import PageIntro from '../../components/pageIntro';
import SectionContact from '../../components/sectionContact';

import { heroShort, headlinesShort, centeredIntro } from './content';

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
		<PageIntro
			theme={{ main: `#FFF` }}
			centeredIntro={centeredIntro}
		/>
		<SectionContact
			theme={{ main: `#FFF` }}
		/>
	</div>
);

export default Process;