import { PageCenteredShort } from '../layouts';
import { Cards } from './index';

const CardsMain = ({ capabilities, capabilities1, capabilities2 }) => (
	<PageCenteredShort theme={{ main: `#FFF` }}>
		<Cards {...capabilities} />
		<Cards {...capabilities1} />
		<Cards {...capabilities2} />
	</PageCenteredShort>
);

export default CardsMain;