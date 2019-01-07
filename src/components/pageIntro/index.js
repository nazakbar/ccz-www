import { PageSectionCentered } from '../layouts';
import { Body, BodyCentered } from '../typography';

const PageIntro = ({ centeredIntro, theme, intro, intro1 }) => {
	if (!centeredIntro) {
		return (
			<PageSectionCentered theme={theme}>
				<Body>{intro}</Body>
				<Body>{intro1}</Body>
			</PageSectionCentered>
		);
	}
	
	return (
		<PageSectionCentered theme={theme}>
			<BodyCentered>{centeredIntro.intro}</BodyCentered>
		</PageSectionCentered>
	);
};

export default PageIntro;