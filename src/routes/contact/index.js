import Helmet from 'preact-helmet';
import HeroSubLink from '../../components/sectionHero/heroSubLink';
import Footer from '../../components/footer';

import { heroLink } from './content';

const Contact = () => (
	<div>
		<Helmet
			title="Contact Us | How can we work together?"
			meta={[{
				name: 'description',
				content: `Transform your business or get to know more about what we're doing.`
			}]}
		/>
		<HeroSubLink
			theme={{ main: `#FFF` }}
			{...heroLink}
		/>
		<Footer
			theme={{ main: `#FFF` }}
		/>
	</div>
);

export default Contact;