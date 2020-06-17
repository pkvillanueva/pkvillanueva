import React from 'react';
import { keyframes, css } from 'frontity';

const SunIcon = ( { animate } ) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="currentColor"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		css={ sunIconStyles }
	>
		<line
			style={ { animationDelay: '0.03s' } }
			css={ animate && lineStyles }
			x1="12"
			y1="21"
			x2="12"
			y2="23"
		/>
		<line
			style={ { animationDelay: '0.06s' } }
			css={ animate && lineStyles }
			x1="4.22"
			y1="19.78"
			x2="5.64"
			y2="18.36"
		/>
		<line
			style={ { animationDelay: '0.09s' } }
			css={ animate && lineStyles }
			x1="1"
			y1="12"
			x2="3"
			y2="12"
		/>
		<line
			style={ { animationDelay: '0.12s' } }
			css={ animate && lineStyles }
			x1="4.22"
			y1="4.22"
			x2="5.64"
			y2="5.64"
		/>
		<line
			style={ { animationDelay: '0.15s' } }
			css={ animate && lineStyles }
			x1="12"
			y1="1"
			x2="12"
			y2="3"
		/>
		<line
			style={ { animationDelay: '0.18s' } }
			css={ animate && lineStyles }
			x1="18.36"
			y1="5.64"
			x2="19.78"
			y2="4.22"
		/>
		<line
			style={ { animationDelay: '0.21s' } }
			css={ animate && lineStyles }
			x1="21"
			y1="12"
			x2="23"
			y2="12"
		/>
		<line
			style={ { animationDelay: '0.24s' } }
			css={ animate && lineStyles }
			x1="18.36"
			y1="18.36"
			x2="19.78"
			y2="19.78"
		/>
		<circle cx="12" cy="12" r="5" />
	</svg>
);

export default SunIcon;

const sunIconStyles = css`
	overflow: hidden;
`;

const scale = keyframes`
  0% {transform: scale(0)}
  80% {transform: scale(1.03)}
  100% {transform: scale(1)}
`;

const lineStyles = css`
	transform-origin: center center;
	animation: ${ scale } 0.5s;
	animation-fill-mode: both;
`;
