import styled from 'styled-components';

import { PageSection } from '../layouts';
import { Heading3, Body } from '../typography';

const ServiceContainerOdd = styled.div `
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 0 4rem 0;

	@media (min-width: 45em) {
		margin: 0 0 5.5rem;
	}

	:last-child{
		margin: 0;
	}

	@media (min-width: 75em) {
		flex: 1 0 40%;

		:nth-child(odd) {
			margin-right: 6rem;
		}

		:last-child {
			margin-right: calc((((100vw - 78rem) / 12) * 6) + 36rem);
		}
	}
`;

const ServiceContainerEven = styled(ServiceContainerOdd) `
	@media (min-width: 75em) {
		:last-child {
			margin-right: 0;
		}
	}
`;

const SectionService = styled(PageSection) `
	padding: 0 1.5em;

	@media (min-width: 45em) {
		padding: 0 3em;
	}

	@media (min-width: 75em) {
		flex-flow: wrap;
		padding: 0 6em;
	}
`;

const ServiceListsOdd = ({ serviceListOdd }) => (
	<ServiceContainerOdd>
		<Heading3>{serviceListOdd.title}</Heading3>
		<Body>{serviceListOdd.brief}</Body>
	</ServiceContainerOdd>
);

const ServiceListsEven = ({ serviceListEven }) => (
	<ServiceContainerEven>
		<Heading3>{serviceListEven.title}</Heading3>
		<Body>{serviceListEven.brief}</Body>
	</ServiceContainerEven>
);

const Services = ({ serviceListsOdd, serviceListsEven }) => {
	if (!serviceListsEven) {
		return (
			<SectionService theme={{ main: `#FFF` }}>
				{serviceListsOdd.map((serviceListOdd) => <ServiceListsOdd serviceListOdd={serviceListOdd} />)}
			</SectionService>
		);
	}

	return (
		<SectionService theme={{ main: `#FFF` }}>
			{serviceListsEven.map((serviceListEven) => <ServiceListsEven serviceListEven={serviceListEven} />)}
		</SectionService>
	);
};

export default Services;
