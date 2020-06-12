import { css } from 'frontity';

export default css`
	*,
	:after,
	:before {
		box-sizing: border-box;
	}

	body {
		background-color: var(--color-background);
		color: var(--color-gray);
		font-family: Inter var, system-ui, -apple-system, BlinkMacSystemFont,
			Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
			Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
	}

	a {
		color: var(--color-primary);
		text-decoration: none;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: var(--color-dark);
		font-weight: 500;
	}

	button {
		cursor: pointer;
	}
`;
