import SectionHero from '../../components/sectionHero';

import { heroShort } from './content';

const Capabilities = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFF` }}
			heroShort={heroShort}
		/>
	</div>
);

export default Capabilities;