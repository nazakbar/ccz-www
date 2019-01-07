import SectionHero from '../../components/sectionHero';
import Headlines from '../../components/headlines';
import SectionPurpose from '../../components/sectionPurpose';
import SectionPrinciples from '../../components/sectionPrinciples';
import SectionContact from '../../components/sectionContact';

import { heroLong, headlinesShort, purpose, principles } from './content';

const Company = () => (
	<div>
		<SectionHero
			theme={{ main: `#FFF` }}
			{...heroLong}
		/>
		<Headlines
			theme={{ main: `#FFCA00` }}
			headLinesShort={headlinesShort}
		/>
		<SectionPurpose
			theme={{ main: `#FFF` }}
			{...purpose}
		/>
		<SectionPrinciples
			theme={{ main: `#07005A` }}
			{...principles}
		/>
		<SectionContact
			theme={{ main: `#FFF` }}
		/>
	</div>
);

export default Company;