import HeroMain from '../../components/sectionHero/heroMain';
import SectionLinked from '../../components/sectionLinked';

import { title, introUs, introServices } from './content';

const Home = () => (
	<div>
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
	</div>
);

export default Home;
