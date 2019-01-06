import SectionHero from '../../components/sectionHero';

import { heroLong } from './content';

const Company = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFF` }}
			{...heroLong}
		/>
	</div>
);

export default Company;