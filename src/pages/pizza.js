import React from 'react';
import Layout from '../components/layout';
import { Row, Col, Container } from 'react-bootstrap';
import ProductList from '../components/ProductList';

export default function pizza() {
	return (
		<Layout>
			<Container>
				<Row className="justify-content-center">
					<h1>Pizzes</h1>
				</Row>
				<Row>
					<ProductList />
				</Row>
			</Container>
		</Layout>
	);
}
