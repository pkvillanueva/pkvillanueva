import React from 'react';
import { connect, styled } from 'frontity';
import MoonIcon from './moon-icon';
import SunIcon from './sun-icon';

const ColorMode = ( { state, actions } ) => {
	const label = `Activate ${ state.theme.colorMode } mode`;

	return (
		<Button
			type="button"
			aria-label={ label }
			title={ label }
			onClick={ actions.theme.toggleColorMode }
		>
			{ state.theme.colorMode === 'light' ? <MoonIcon /> : <SunIcon /> }
		</Button>
	);
};

export default connect( ColorMode );

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: calc(var(--base-spacing) * 2);
	height: calc(var(--base-spacing) * 2);
	padding: 0;
	background-color: transparent;
	border: none;
	border-radius: 0;
	box-shadow: none;
	color: var(--color-gray);

	&:hover {
		color: var(--color-dark);
	}

	&:focus {
		outline: none;
	}
`;
