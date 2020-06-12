import React from 'react';
import { keyframes, css } from 'frontity';

const SunIcon = () => (
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
		<line css={ lineStyles( 1 ) } x1="12" y1="21" x2="12" y2="23" />
		<line css={ lineStyles( 2 ) } x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
		<line css={ lineStyles( 3 ) } x1="1" y1="12" x2="3" y2="12" />
		<line css={ lineStyles( 4 ) } x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
		<line css={ lineStyles( 5 ) } x1="12" y1="1" x2="12" y2="3" />
		<line css={ lineStyles( 6 ) } x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
		<line css={ lineStyles( 7 ) } x1="21" y1="12" x2="23" y2="12" />
		<line css={ lineStyles( 8 ) } x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
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

const lineStyles = ( index ) => css`
	transform-origin: center center;
	animation: ${ scale } 0.5s ${ index * 0.03 }s;
	animation-fill-mode: both;
`;
