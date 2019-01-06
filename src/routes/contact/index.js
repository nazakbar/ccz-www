import HeroSubLink from '../../components/sectionHero/heroSubLink';

import { heroLink } from './content';

const Contact = () => (
	<HeroSubLink
		theme={{ main: `#FFF` }}
		{...heroLink}
	/>
);

export default Contact;