import styled from 'styled-components';

import { PageSection } from '../layouts';
import { Heading3, Body } from '../typography';

const PurposeSection = styled(PageSection) `
	@media (min-width: 57em) {
		> ${Heading3} {
			margin: 0 0 0.5rem calc(((100vw - 28rem) / 12) + 2rem);
		}

		> ${Body} {
			margin: 0 calc(((100vw - 28rem) / 12) + 2rem) 1.25rem;

			:last-child {
				margin-bottom: 0;
			}
		}
	}

	@media (min-width: 75em) {
		> ${Heading3} {
			margin: 0 0 0.5rem;
		}

		> ${Body} {
			margin: 0 calc((((100vw - 78rem) / 12) * 4) + 24rem) 1.5rem 0;
		}
	}

	@media (min-width: 112em) {
		> ${Heading3} {
			margin: 0 0 1rem;
		}

		> ${Body} {
			margin: 0 calc((((100vw - 78rem) / 12) * 4) + 24rem) 2rem 0;
		}
	}
`;

const SectionPurpose = ({ theme, title, line, line1, line2 }) => (
	<PurposeSection theme={theme}>
		<Heading3>{title}</Heading3>
		<Body>{line}</Body>
		<Body>{line1}</Body>
		<Body>{line2}</Body>
	</PurposeSection>
);

export default SectionPurpose;
