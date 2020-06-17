import React, { useState } from 'react';
import { connect, styled } from 'frontity';
import MoonIcon from './moon-icon';
import SunIcon from './sun-icon';

const ColorMode = ( { state, actions } ) => {
	const [ animate, setAnimate ] = useState( false );
	const label = `Activate ${ state.theme.colorMode } mode`;

	const handleClick = () => {
		setAnimate( true );
		actions.theme.toggleColorMode();
	};

	return (
		<Button
			type="button"
			aria-label={ label }
			title={ label }
			onClick={ handleClick }
		>
			{ state.theme.colorMode === 'light' ? (
				<MoonIcon animate={ animate } />
			) : (
				<SunIcon animate={ animate } />
			) }
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
	transition: color 0.125s cubic-bezier(0.25, 0.1, 0.25, 1);

	&:hover {
		color: var(--text-dark);
	}

	&:focus {
		outline: none;
	}
`;
