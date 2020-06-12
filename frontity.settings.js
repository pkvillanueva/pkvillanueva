const settings = {
	name: 'pkvillanueva',
	state: {
		frontity: {
			url: 'https://pkvillanueva.com',
			title: 'Patrick Villanueva',
			logo: 'Patrick.',
		},
	},
	packages: [
		{
			name: '@pkvillanueva/theme',
			state: {
				theme: {
					menu: [
						[ 'Blog', '/blog/' ],
						[ 'Projects', '/projects/' ],
						[ 'About', '/about/' ],
						[ 'Contact', '/contact/' ],
					],
					featured: {
						showOnList: false,
						showOnPost: false,
					},
				},
			},
		},
		{
			name: '@frontity/wp-source',
			state: {
				source: {
					api: 'https://api.pkvillanueva.com/wp-json',
					homepage: '/hello',
					postsPage: '/blog',
				},
			},
		},
		'@frontity/tiny-router',
		'@frontity/html2react',
	],
};

export default settings;
