/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const productos = await graphql(`
		query {
			allStrapiProducto(sort: { fields: createdAt, order: DESC }) {
				nodes {
					id
					Nombre
					Tipo
					Subtipo
					createdAt
				}
			}
		}
    `);
	console.log(productos.data.allStrapiProducto.nodes);

	// Creacion paginas.
	productos.data.allStrapiProducto.nodes.forEach((node) => {
		createPage({
			// Path for this page — required
			path: `/producto`,
			component: path.resolve(`src/templates/producto.js`)
		});
	});
};
