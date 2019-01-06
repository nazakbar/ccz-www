import SectionHero from '../../components/sectionHero';

import { heroShort } from './content';

const Strategy = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFCA00` }}
			heroShort={heroShort}
		/>
	</div>
);

export default Strategy;