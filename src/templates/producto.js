import React from 'react';
import Layout from '../components/layout';
import { Row, Col, Container } from 'react-bootstrap';
import ProductList from '../components/ProductList';
import { graphql } from 'gatsby';

export default function producto(props) {
	// console.log();
	console.log(props.location.state);
	return (
		<Layout>
			<Container>
				<Row className="justify-content-center">
					<h1>Pizzes</h1>
				</Row>
				<Col>
					<ProductList data={props.data.allStrapiProducto.nodes} state={props.location.state} />
				</Col>
			</Container>
		</Layout>
	);
}

export const query = graphql`
	query {
		allStrapiProducto {
			nodes {
				id
				Nombre
				Tipo
				Subtipo
				createdAt
			}
		}
	}
`;
