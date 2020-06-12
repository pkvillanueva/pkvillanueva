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
					<NavItem key={ name }>
						{ /* If link url is the current page, add `aria-current` for a11y */ }
						<Link link={ link } aria-current={ isCurrentPage ? 'page' : undefined }>
							{ name }
						</Link>
					</NavItem>
				);
			} ) }
		</NavList>
	</NavContainer>
);

export default connect( Nav );

const NavContainer = styled.nav`
	margin-right: calc(var(--base-spacing) * 2);
`;

const NavList = styled.ul`
display: flex;
	margin: 0;
	padding: 0;
	list-style: none;
`;

const NavItem = styled.li`
	&:not(:last-of-type) {
		margin-right: calc(var(--base-spacing) * 0.5);
	}

	& > a {
		display: inline-block;
		padding: 0 calc(var(--base-spacing) * 0.5);
		color: var(--color-gray);
		line-height: calc(var(--base-spacing) * 3);

		&:hover,
		&[aria-current="page"] {
			color: var(--color-dark);
		}
	}
`;
