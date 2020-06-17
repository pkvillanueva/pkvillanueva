import { css } from 'frontity';

export default ( colorMode ) => {
	let background = '#FFFFFF';
	let primary = '#4C51BF';
	let text = {
		base: '#2D3748',
		light: '#68778D',
		dark: '#1A202C',
	};

	if ( colorMode === 'dark' ) {
		background = '#1A202C';
		primary = '#F6E05E';
		text = {
			base: '#EDF2F7',
			light: '#CBD5E0',
			dark: '#F7FAFC',
		};
	}

	return css`
		:root {
			--background: ${ background };
			--primary: ${ primary };
			--text: ${ text.base };
			--text-light: ${ text.light };
			--text-dark: ${ text.dark };
			--font-family: Inter var, system-ui, -apple-system, BlinkMacSystemFont,
				Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
				Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
		}
	`;
};
