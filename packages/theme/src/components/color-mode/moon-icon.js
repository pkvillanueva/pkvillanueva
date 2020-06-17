import React from 'react';
import { css, keyframes } from 'frontity';

const MoonIcon = ( { animate } ) => (
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
		css={ animate && moonIconStyles }
	>
		<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
	</svg>
);

export default MoonIcon;

const rotate = keyframes`
	0% {transform: rotate(90deg) scale(0.5)}
  50% {transform: rotate(-30deg) scale(1)}
  100% {transform: rotate(0deg) scale(1)}
`;

const moonIconStyles = css`
	/* transform-origin: center center; */
	animation: ${ rotate } 0.7s;
	animation-fill-mode: both;
`;
