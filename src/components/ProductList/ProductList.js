import React from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import './ProductList.scss';
import Foto from '../../images/pizza-normal.jpg';

export default function ProductList() {
	return (
		<Row>
			<Card className="text-center">
				<Card.Img variant="top" src={Foto} alt="pizza" />
				<Card.Body>
					<Card.Title>Pizza Margarita</Card.Title>
					<Card.Text>La pizza tipica amb tomaquet, formatge i pernil dolç</Card.Text>
					<Button variant="primary">Ver Mas</Button>
				</Card.Body>
			</Card>
		</Row>
	);
}
