module.exports = {
	siteMetadata: {
		title: `Pizzeria Aki Alla`,
		description: `Pizzeria de Santa Coloma de Farners.`,
		author: `@x3sp3d3s`
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/logo.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `http://localhost:1337`,
				queryLimit: 1000,
				contentTypes: [ `producto` ]
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
