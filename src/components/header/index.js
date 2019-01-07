import { Component } from 'preact';
import { Link } from 'preact-router/match';
import styled from 'styled-components';

import { bodyFonts } from '../../utils/fonts';
import BrandMark from '../brandmark';
import Navigations from '../navigations';
import MenuControl from '../navigations/menuControl';
import SocialLinks from '../navigations/socialLinks';
import PageLinks from '../navigations/pageLinks';
import PolicyLinks from '../navigations/policyLinks';

const HeaderContainer = styled.header `
	display: flex;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	padding: 0;
	background: #FFF;
	box-shadow: 0 0 5px rgba(140,140,140,0.5);
	z-index: 10;

	@media (min-width: 57em) {
		justify-content: space-between;
	}
`;

const HeaderSection = styled.section `
	display: flex;
	justify-content: space-between;
	width: 100%;

	@media (min-width: 57em) {
		width: auto;
	}
`;

const MarkContainer = styled(Link) `
	display: inline-flex;
	height: 3.5rem;
	padding: 1.125rem 1.5rem;
`;

const ButtonMenu = styled.button `
	display: none;

	@media (min-width: 32em) {
		display: inline-block;
		height: 3.5rem;
		padding: 0.625rem 1.5rem 0;
		border: none;
		cursor: pointer;
		outline: none;
		font-family: ${bodyFonts};
		font-size: 0.875rem;
		font-weight: 700;
		background: #FFF;
	}

	@media (min-width: 57em) {
		display: none;
	}
`;

const HeaderDisplay = ({ unfold }) => (
	<HeaderSection>
		<MarkContainer href="/" aria-label="Concrezan - Home">
			<BrandMark />
		</MarkContainer>
		<ButtonMenu onClick={unfold}>Menu</ButtonMenu>
	</HeaderSection>
);

class Header extends Component {
	
	dismiss = () => this.setState({ navigation: false });
	unfold = () => this.setState({ navigation: !this.state.navigation })

	render({}, { navigation }) {
		return (
			<HeaderContainer>
				<HeaderDisplay unfold={this.unfold} />
				<Navigations unfold={navigation} onDismiss={this.dismiss}>
					<MenuControl onDismiss={this.dismiss} />
					<SocialLinks onDismiss={this.dismiss} />
					<PageLinks onDismiss={this.dismiss} />
					<PolicyLinks onDismiss={this.dismiss} />
				</Navigations>
			</HeaderContainer>
		);
	}
}

export default Header;
