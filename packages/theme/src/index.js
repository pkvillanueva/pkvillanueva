import Theme from './components';
import image from '@frontity/html2react/processors/image';
import iframe from '@frontity/html2react/processors/iframe';
import link from './processors/link';

const config = {
	name: '@pkvillanueva/theme',
	roots: {
		/**
		 *  In Frontity, any package can add React components to the site.
		 *  We use roots for that, scoped to the `theme` namespace.
		 */
		theme: Theme,
	},
	state: {
		/**
		 * State is where the packages store their default settings and other
		 * relevant state. It is scoped to the `theme` namespace.
		 */
		theme: {
			colorMode: 'light',
			menu: [],
			social: [],
			isMobileMenuOpen: false,
			featured: {
				showOnList: false,
				showOnPost: false,
			},
		},
	},
	/**
	 * Actions are functions that modify the state or deal with other parts of
	 * Frontity like libraries.
	 */
	actions: {
		theme: {
			toggleMobileMenu: ( { state } ) => {
				state.theme.isMobileMenuOpen = ! state.theme.isMobileMenuOpen;
			},
			closeMobileMenu: ( { state } ) => {
				state.theme.isMobileMenuOpen = false;
			},
			toggleColorMode: ( { state } ) => {
				state.theme.colorMode = state.theme.colorMode === 'light' ? 'dark' : 'light';

				if ( window ) {
					window.localStorage.setItem( 'colorMode', state.theme.colorMode );
				}
			},
			beforeCSR: ( { state } ) => {
				if ( window ) {
					const colorMode = window.localStorage.getItem( 'colorMode' ) || state.theme.colorMode;
					state.theme.colorMode = colorMode;
				}
			},
		},
	},
	libraries: {
		html2react: {
			/**
			 * Add a processor to `html2react` so it processes the `<img>` tags
			 * inside the content HTML. You can add your own processors too
			 */
			processors: [ image, iframe, link ],
		},
	},
};

export default config;
