import React from 'react';
import { connect, styled } from 'frontity';
import Link from './link';

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ( { state, className } ) => (
	<NavContainer className={ className }>
		<NavList>
			{ state.theme.menu.map( ( [ name, link ] ) => {
			// Check if the link matched the current page url
				const isCurrentPage = state.router.link === link;
				return (
					<li key={ name }>
						{ /* If link url is the current page, add `aria-current` for a11y */ }
						<NavLink link={ link } aria-current={ isCurrentPage ? 'page' : undefined }>
							{ name }
						</NavLink>
					</li>
				);
			} ) }
		</NavList>
	</NavContainer>
);

export default connect( Nav );

const NavContainer = styled.nav`
	margin-right: 2rem;
`;

const NavList = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	list-style: none;
`;

const NavLink = styled( Link )`
	position: relative;
	display: inline-block;
	padding: 0 1rem;
	color: var(--text-light);

	&:hover,
	&[aria-current="page"] {
		color: var(--text-dark);
	}
`;
