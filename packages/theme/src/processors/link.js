import Link from '../components/link';

/**
 * Client routing for internal links.
 */
const link = {
	name: 'link',
	priority: 10,
	test: ( { node, state } ) => {
		return node.component === 'a' && node.props.href.startsWith( state.source.root );
	},
	processor: ( { node, state } ) => {
		node.props.link = node.props.href.replace( state.source.root, '' );
		node.component = Link;
		return node;
	},
};

export default link;
