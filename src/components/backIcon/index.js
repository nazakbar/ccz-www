import { h } from 'preact';
import styled from 'styled-components';

const Mark = styled.svg `
	fill: #FFF;
	width: 16px;
	height: 16px;
	margin-right: 8px;
`;

const BackIcon = () => (
	<Mark xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 48" fill="none">
		<path fill-rule="evenodd" d="M0 24c0-1 .4-2 1.2-2.8l20-20a4 4 0 0 1 5.7 5.7L9.6 24l17.1 17.1a4 4 0 0 1-5.7 5.7l-20-20A4 4 0 0 1 0 24z" clip-rule="evenodd" />
	</Mark>
);

export default BackIcon;