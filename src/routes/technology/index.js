import Helmet from 'preact-helmet';
import SectionHero from '../../components/sectionHero';
import ServiceIntro from '../../components/serviceIntro';
import Services from '../../components/serviceList';
import Cards from '../../components/cards';
import SectionContact from '../../components/sectionContact';
import Footer from '../../components/footer';

import { heroShort, pageIntro, serviceListsEven, capabilities, capabilities1 } from './content';

const Technology = () => (
	<div>
		<Helmet
			title="Technology | Build frictionless and cohesive experiences for your users."
			meta={[{
				name: 'description',
				content: `The team at Concrezan employs a blend of rapid prototyping and phased model. We enhance and personalize your touchpoints across many tech verticals.`
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