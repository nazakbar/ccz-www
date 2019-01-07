import SectionHero from '../../components/sectionHero';
import ServiceIntro from '../../components/serviceIntro';
import Services from '../../components/serviceList';
import SectionContact from '../../components/sectionContact';

import { heroShort, pageIntro, serviceListsOdd } from './content';

const Design = () => (
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
			serviceListsOdd={serviceListsOdd}
		/>
		<SectionContact
			theme={{ main: `#FFCA00` }}
		/>
	</div>
);

export default Design;