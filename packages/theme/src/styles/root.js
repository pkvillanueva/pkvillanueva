import { css } from 'frontity';

export default ( colorMode ) => {
	let background = '#FFFFFF';
	let primary = '#805AD5';
	let dark = '#000000';
	let gray = '#4A5568';

	if ( colorMode === 'dark' ) {
		background = '#1A202C';
		primary = '#F6E05E';
		dark = '#FFFFFF';
		gray = '#E2E8F0';
	}

	return css`
		:root {
			--color-background: ${ background };
			--color-primary: ${ primary };
			--color-dark: ${ dark };
			--color-gray: ${ gray };
			--base-spacing: 1rem;
			--base-container: 960px;
		}
	`;
};
