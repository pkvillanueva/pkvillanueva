import React from 'react';
import { connect, styled } from 'frontity';
import dayjs from 'dayjs';
import Link from '../link';
import FeaturedMedia from '../featured-media';

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ( { state, item } ) => {
	const date = dayjs( item.date ).format( 'MMMM D, YYYY' );

	return (
		<article>
			<Link link={ item.link }>
				<Title dangerouslySetInnerHTML={ { __html: item.title.rendered } } />
			</Link>

			<div>
				<PublishDate>
					{ date }
				</PublishDate>
			</div>

			{ /*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */ }
			{ state.theme.featured.showOnList && (
				<FeaturedMedia id={ item.featured_media } />
			) }

			{ /* If the post has an excerpt (short summary text), we render it */ }
			{ item.excerpt && (
				<div dangerouslySetInnerHTML={ { __html: item.excerpt.rendered } } />
			) }
		</article>
	);
};

// Connect the Item to gain access to `state` as a prop
export default connect( Item );

const Title = styled.h2`
`;

const PublishDate = styled.span`
	color: var(--text-light);
`;
