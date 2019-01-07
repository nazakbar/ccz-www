import { Link } from 'preact-router/match';
import styled from 'styled-components';

import { bodyFonts } from '../../utils/fonts';
import BrandMark from '../brandmark';
import CloseIcon from '../closeIcon';

const ControlContainer = styled.section `
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0.75rem 1.5rem;
`;

const ButtonClose = styled.button `
	display: flex;
	align-items: center;
	justify-content: center;
	height: 3rem;
	padding: 0;
	font-family: ${bodyFonts};
	font-size: 0.75rem;
	font-weight: 700;
	border: none;
	background: none;
	color: #FFF;
`;

const MarkContainer = styled(Link) `
	display: flex;
	height: 3rem;
	align-items: center;
	justify-content: center;

	svg {
		height: 15px;
		width: 93px;
		fill: #FFF;
	}
`;

const MenuControl = ({ onDismiss }) => (
	<ControlContainer>
		<MarkContainer href="/" aria-label="Concrezan - Home">
			<BrandMark />
		</MarkContainer>
		<ButtonClose onClick={onDismiss}>Close<CloseIcon /></ButtonClose>
	</ControlContainer>
);

export default MenuControl;