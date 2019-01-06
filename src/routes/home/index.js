import HeroMain from '../../components/sectionHero/heroMain';
import SectionLinked from '../../components/sectionLinked';
import Headlines from '../../components/headlines';

import { title, introUs, introServices, headlines } from './content';

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
		<Headlines
			theme={{ main: `#FFCA00` }}
			{...headlines}
		/>
	</div>
);

export default Home;
