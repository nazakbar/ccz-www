import SectionHero from '../../components/sectionHero';

import { heroShort } from './content';

const Technology = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFCA00` }}
			heroShort={heroShort}
		/>
	</div>
);

export default Technology;