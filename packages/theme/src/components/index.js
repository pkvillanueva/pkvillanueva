import React from 'react';
import { Global, connect, styled, Head } from 'frontity';
import Switch from '@frontity/components/switch';
import Header from './header';
import Footer from './footer';
import List from './list';
import Post from './post';
import Loading from './loading';
import Title from './title';
import PageError from './page-error';
import rootStyles from '../styles/root';
import normalizeStyles from '../styles/normalize';
import globalStyles from '../styles/global';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ( { state } ) => {
	// Get information about the current URL.
	const data = state.source.get( state.router.link );

	return (
		<>
			{ /* Add some metatags to the <head> of the HTML. */ }
			<Title />
			<Head>
				<meta name="description" content={ state.frontity.description } />
				<html lang="en" />
			</Head>

			{ /* Add some global styles for the whole site, like body or a's.
      Not classes here because we use CSS-in-JS. Only global HTML tags. */ }
			<Global styles={ rootStyles( state.theme.colorMode ) } />
			<Global styles={ normalizeStyles } />
			<Global styles={ globalStyles } />

			<Container>
				{ /* Add the header of the site. */ }
				<Header />

				{ /* Add the main section. It renders a different component depending
				on the type of URL we are in. */ }
				<Main>
					<Switch>
						<Loading when={ data.isFetching } />
						<List when={ data.isArchive } />
						<Post when={ data.isPostType } />
						<PageError when={ data.isError } />
					</Switch>
				</Main>

				{ /* Add the footer of the site. */ }
				<Footer />
			</Container>
		</>
	);
};

export default connect( Theme );

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 60rem;
	min-height: 100vh;
	margin: 0 auto;
	padding: 0 2rem;
`;

const Main = styled.main`
	flex-grow: 1;
	font-size: 1.125rem;
	line-height: 1.825;

	a:not([class]) {
		position: relative;
		white-space: nowrap;
		color: inherit;

		&:after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -0.125rem;
			display: block;
			height: 0.125rem;
			width: 100%;
			background-color: var(--primary);
			transition: height 0.125s ease;
		}

		&:hover:after {
			height: 0.25rem;
		}
	}
`;
