import HeroSubLink from '../../components/sectionHero/heroSubLink';
import Footer from '../../components/footer';

import { heroLink } from './content';

const Contact = () => (
	<div>
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