import Helmet from 'preact-helmet';
import HeroMain from '../../components/sectionHero/heroMain';
import SectionLinked from '../../components/sectionLinked';
import Headlines from '../../components/headlines';
import SectionContact from '../../components/sectionContact';
import Footer from '../../components/footer';

import { title, introUs, introServices, headlines } from './content';

const Home = () => (
	<div>
		<Helmet
			title="Concrezan | A brand experience and service design company."
			meta={[{
				name: 'description',
				content: `Concrezan is a brand experience and service design company specializing in brand, service, and innovation.`
			}]}
		/>
		<HeroMain
			theme={{ main: `#FFF` }}
			{...title}
		/>
		<SectionLinked
			theme={{ main: `#E5E5E5` }}
			{...introUs}
		/>
		<SectionLinked
			theme={{ main: `#FFF` }}
			{...introServices}
		/>
		<Headlines
			theme={{ main: `#FFCA00` }}
			{...headlines}
		/>
		<SectionContact
			theme={{ main: `#FFF` }}
		/>
		<Footer
			theme={{ main: `#FFF` }}
		/>
	</div>
);

export default Home;
