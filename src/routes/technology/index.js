import SectionHero from '../../components/sectionHero';
import ServiceIntro from '../../components/serviceIntro';
import Services from '../../components/serviceList';
import SectionContact from '../../components/sectionContact';

import { heroShort, pageIntro, serviceListsEven } from './content';

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
		<Services
			serviceListsEven={serviceListsEven}
		/>
		<SectionContact
			theme={{ main: `#FFCA00` }}
		/>
	</div>
);

export default Technology;