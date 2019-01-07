import { h } from 'preact';
import styled from 'styled-components';

const Mark = styled.svg `
	fill: #FFF;
	width: 16px;
	height: 16px;
	margin-left: 8px;
`;

const CloseIcon = () => (
	<Mark xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
		<path fill-rule="evenodd" d="M1.16 41.14c-1.562 1.562-1.539 4.119.024 5.68 1.562 1.563 4.118 1.587 5.68.024l17.138-17.137L41.14 46.845c1.562 1.562 4.119 1.538 5.68-.024 1.563-1.562 1.587-4.119.024-5.681L29.707 24.002 46.844 6.864c1.563-1.562 1.539-4.118-.023-5.68C45.259-.38 42.702-.402 41.14 1.16L24.002 18.297 6.864 1.16c-1.562-1.562-4.118-1.538-5.68.024C-.38 2.746-.402 5.302 1.16 6.864l17.137 17.138L1.16 41.14z" clip-rule="evenodd" />
	</Mark>
);

export default CloseIcon;