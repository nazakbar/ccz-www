import SectionHero from '../../components/sectionHero';
import Headlines from '../../components/headlines';
import PageIntro from '../../components/pageIntro';
import ProcessPhases from '../../components/processPhases';
import SectionContact from '../../components/sectionContact';
import Footer from '../../components/footer';

import { heroShort, headlinesShort, centeredIntro, phase1, phase2, phase3, phase4, phase5, phase2Lists, phase3Lists } from './content';

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
		<ProcessPhases
			theme={{ align: `center` }}
			phase1={phase1}
			phase2={phase2}
			phase3={phase3}
			phase4={phase4}
			phase5={phase5}
			phase2Lists={phase2Lists}
			phase3Lists={phase3Lists}
		/>
		<SectionContact
			theme={{ main: `#FFF` }}
		/>
		<Footer
			theme={{ main: `#FFF` }}
		/>
	</div>
);

export default Process;