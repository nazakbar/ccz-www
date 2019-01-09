import SectionHero from '../../components/sectionHero';
import Headlines from '../../components/headlines';
import CardsMain from '../../components/cards/main';
import SectionContact from '../../components/sectionContact';
import Footer from '../../components/footer';

import { heroShort, headlinesCards, headlinesCapabilities, capabilities, capabilities1, capabilities2 } from './content';

const Capabilities = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFF` }}
			heroShort={heroShort}
		/>
		<Headlines
			theme={{ main: `#FFF` }}
			{...headlinesCards}
		/>
		<CardsMain
			capabilities={capabilities}
			capabilities1={capabilities1}
			capabilities2={capabilities2}
		/>
		<Headlines
			theme={{ main: `#FFCA00` }}
			{...headlinesCapabilities}
		/>
		<SectionContact
			theme={{ main: `#FFF` }}
		/>
		<Footer
			theme={{ main: `#FFF` }}
		/>
	</div>
);

export default Capabilities;