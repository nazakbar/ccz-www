import { PageHero, PageTitle, SubTitle } from './layouts';

const SectionHero = ({ heroShort, theme, title, subtitle, subtitle1 }) => {
	if (!heroShort) {
		return (
			<PageHero theme={theme}>
				<PageTitle>{title}</PageTitle>
				<SubTitle>{subtitle}</SubTitle>
				<SubTitle>{subtitle1}</SubTitle>
			</PageHero>
		);
	}

	return (
		<PageHero theme={theme}>
			<PageTitle>{heroShort.title}</PageTitle>
			<SubTitle>{heroShort.subtitle}</SubTitle>
		</PageHero>
	);
};

export default SectionHero;