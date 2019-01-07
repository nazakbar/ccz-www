import SectionHero from '../../components/sectionHero';
import ServiceIntro from '../../components/serviceIntro';
import SectionContact from '../../components/sectionContact';

import { heroShort, pageIntro } from './content';

const Technology = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFCA00` }}
			heroShort={heroShort}
		/>
		<ServiceIntro
			theme={{ main: `#FFF` }}
			{...pageIntro}
		/>
		<SectionContact
			theme={{ main: `#FFCA00` }}
		/>
	</div>
);

export default Technology;