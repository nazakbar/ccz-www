import SectionHero from '../../components/sectionHero';
import ServiceIntro from '../../components/serviceIntro';
import Services from '../../components/serviceList';
import Cards from '../../components/cards';
import SectionContact from '../../components/sectionContact';
import Footer from '../../components/footer';

import { heroShort, pageIntro, serviceListsEven, capabilities, capabilities1 } from './content';

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
		<Cards
			capabilities={capabilities}
			capabilities1={capabilities1}
		/>
		<SectionContact
			theme={{ main: `#FFCA00` }}
		/>
		<Footer
			theme={{ main: `#FFCA00` }}
		/>
	</div>
);

export default Technology;