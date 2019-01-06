import SectionHero from '../../components/sectionHero';

import { heroShort } from './content';

const Design = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFCA00` }}
			heroShort={heroShort}
		/>
	</div>
);

export default Design;