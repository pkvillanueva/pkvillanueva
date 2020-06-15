import React from 'react';
import { connect, styled } from 'frontity';

const Footer = ( { state } ) => (
	<Container>
		<span>
			&copy; 2020 Patrick Villanueva. Built with{ ' ' }
			<a href="https://frontity.org" target="_blank" rel="noreferrer">
				Frontity
			</a>{ ' ' }
			🚀.
		</span>
		<Nav>
			{ state.theme.social.map( ( [ name, link ] ) => (
				<NavLink href={ link } key={ name } target="_blank" rel="noreferrer">
					{ name }
				</NavLink>
			) ) }
		</Nav>
	</Container>
);

export default connect( Footer );

const Container = styled.footer`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 6rem;
	color: var(--text-light);
`;

const Nav = styled.nav`
	display: flex;
`;

const NavLink = styled.a`
	margin-left: 2rem;
	color: var(--text-light);

	&:hover {
		color: var(--text-dark);
	}
`;
