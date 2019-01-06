import MultiLinks from '../multiLinks';

import { PageHero, PageTitle, SubTitle } from './layouts';

const HeroSubLink = ({ theme, title, subtitle, href, href1, label, label1, link, link1 }) => (
	<PageHero theme={theme}>
		<PageTitle>{title}</PageTitle>
		<SubTitle>{subtitle}</SubTitle>
		<MultiLinks
			href={href}
			href1={href1}
			label={label}
			label1={label1}
			link={link}
			link1={link1}
		/>
	</PageHero>
);

export default HeroSubLink;