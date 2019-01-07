import { Component } from 'preact';
import styled from 'styled-components';

import { bodyFonts } from '../../utils/fonts';
import Navigations from '../navigations';
import MenuControl from '../navigations/menuControl';
import SocialLinks from '../navigations/socialLinks';
import PageLinks from '../navigations/pageLinks';
import PolicyLinks from '../navigations/policyLinks';

const MenuContainer = styled.div `
	position: fixed;
	bottom: 3rem;
	width: 100%;
	padding: 0 1.5rem;
	z-index: 10;

	@media (min-width: 32em) {
		display: none;
	}
`;

const ButtonMenu = styled.button `
	height: 3rem;
	width: 100%;
	padding: 0;
	border: none;
	cursor: pointer;
	outline: none;
	font-family: ${bodyFonts};
	font-size: 0.875rem;
	font-weight: 700;
	background: #FFF;
	box-shadow: 0 2px 6px rgba(140,140,140,0.5);	
`;

class Menu extends Component {

	state = {
		slide: 0,
		lastScrollY: 0
	}

	dismiss = () => this.setState({ navigation: false });
	unfold = () => this.setState({ navigation: !this.state.navigation });

	handleScroll = () => {
		const { lastScrollY } = this.state;
		const currentScrollY = window.scrollY;

		if (currentScrollY > lastScrollY) {
			this.setState({ slide: '96px' });
		}
		else {
			this.setState({ slide: '0px' });
		}
		this.setState({ lastScrollY: currentScrollY });
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	render({}, { navigation }) {
		return (
			<MenuContainer>
				<ButtonMenu style={{
					transform: `translate(0, ${this.state.slide})`,
					transition: `transform 300ms linear`
				}} onClick={this.unfold}
				>Menu</ButtonMenu>
				<Navigations unfold={navigation} onDismiss={this.dismiss}>
					<MenuControl onDismiss={this.dismiss} />
					<SocialLinks onDismiss={this.dismiss} />
					<PageLinks onDismiss={this.dismiss} />
					<PolicyLinks onDismiss={this.dismiss} />
				</Navigations>
			</MenuContainer>
		);
	}
}

export default Menu;