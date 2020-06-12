import React from 'react';
import { connect, styled } from 'frontity';

const Footer = ( { state } ) => {
	console.log( state );

	return (
		<Container>
			<span>
				&copy; 2020 Patrick Villanueva. Built with{ ' ' }
				<a href="https://frontity.org" target="_blank" rel="noreferrer">
					Frontity
				</a>{ ' ' }
				🚀.
			</span>
		</Container>
	);
};

export default connect( Footer );

const Container = styled.footer`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: calc(var(--base-spacing) * 6);
`;

const Copyright = styled.div``;
