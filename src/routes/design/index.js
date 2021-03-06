import Helmet from 'preact-helmet';
import SectionHero from '../../components/sectionHero';
import ServiceIntro from '../../components/serviceIntro';
import Services from '../../components/serviceList';
import Cards from '../../components/cards';
import SectionContact from '../../components/sectionContact';
import Footer from '../../components/footer';

import { heroShort, pageIntro, serviceListsOdd, capabilities, capabilities1 } from './content';

const Design = () => (
	<div>
		<Helmet
			title="Design | Designing the future in service to people."
			meta={[{
				name: 'description',
				content: `We help you uncover opportunities for innovation your competition missed.`
			}]}
		/>
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

export default Design;