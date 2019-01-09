import Helmet from 'preact-helmet';
import SectionHero from '../../components/sectionHero';
import Headlines from '../../components/headlines';
import SectionPurpose from '../../components/sectionPurpose';
import SectionPrinciples from '../../components/sectionPrinciples';
import SectionContact from '../../components/sectionContact';
import Footer from '../../components/footer';

import { heroLong, headlinesShort, purpose, principles } from './content';

const Company = () => (
	<div>
		<Helmet
			title="Our Company | A brand experience and service design company."
			meta={[{
				name: 'description',
				content: `Concrezan's focus is to help organizations reinforce in the face of change, discover a new purpose, and shape a better future.`
			}]}
		/>
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
		<Footer
			theme={{ main: `#FFF` }}
		/>
	</div>
);

export default Company;