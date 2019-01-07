import { PageSection } from '../layouts';
import { Body } from '../typography';

const TermsIntro = ({ theme, brief, brief1, brief2 }) => (
	<PageSection theme={theme}>
		<Body>{brief}</Body>
		<Body>{brief1}</Body>
		<Body>{brief2}</Body>
	</PageSection>
);

export default TermsIntro;