import SectionHero from '../../components/sectionHero';
import ServiceIntro from '../../components/serviceIntro';
import Services from '../../components/serviceList';
import CardsPager from '../../components/cards';
import SectionContact from '../../components/sectionContact';

import { heroShort, pageIntro, serviceListsOdd, capabilities, capabilities1 } from './content';

const Strategy = () => (
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
		<CardsPager
			capabilities={capabilities}
			capabilities1={capabilities1}
		/>
		<SectionContact
			theme={{ main: `#FFCA00` }}
		/>
	</div>
);

export default Strategy;