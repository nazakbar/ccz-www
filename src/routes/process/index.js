import SectionHero from '../../components/sectionHero';

import { heroShort } from './content';

const Process = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFF` }}
			heroShort={heroShort}
		/>
	</div>
);

export default Process;