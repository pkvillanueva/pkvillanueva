import React from 'react';
import { connect, styled } from 'frontity';
import Link from './link';
import Nav from './nav';
import MobileMenu from './menu';
import ColorMode from './color-mode';

const Header = ( { state } ) => {
	return (
		<Container>
			<Home link="/">
				<Logo>{ state.frontity.logo }</Logo>
			</Home>
			<NavMenu />
			<ColorMode />
			<MobileMenu />
		</Container>
	);
};

export default connect( Header );

const Container = styled.header`
  display: flex;
	flex-direction: row;
	align-items: center;
	height: calc(var(--base-spacing) * 6);
`;

const Logo = styled.h2`
	margin: 0;
	font-weight: 500;
`;

const Home = styled( Link )`
	margin-right: calc(var(--base-spacing) * 2);
	color: inherit;
  text-decoration: none;
`;

const NavMenu = styled( Nav )`
	flex-grow: 1;
`;
