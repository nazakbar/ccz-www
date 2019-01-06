import HeroMain from '../../components/sectionHero/heroMain';

import { title } from './content';

const Home = () => (
	<div>
		<HeroMain
			theme={{ main: `#FFF` }}
			{...title}
		/>
	</div>
);

export default Home;
