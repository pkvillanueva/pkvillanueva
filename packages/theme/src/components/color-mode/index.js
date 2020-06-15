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
	width: 2rem;
	height: 2rem;
	padding: 0;
	background-color: transparent;
	border: none;
	border-radius: 0;
	box-shadow: none;
	color: var(--text-light);

	&:hover {
		color: var(--text-dark);
	}

	&:focus {
		outline: none;
	}
`;
