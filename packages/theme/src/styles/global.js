import { css } from 'frontity';

export default css`
	*,
	:after,
	:before {
		box-sizing: border-box;
	}

	body {
		background-color: var(--background);
		color: var(--text);
		font-family: var(--font-family);
		line-height: 1.875;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: var(--text-dark);
		font-weight: 500;
	}

	button {
		cursor: pointer;
	}
`;
