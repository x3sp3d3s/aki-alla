import React from 'react';
import { Link } from 'gatsby';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import Alerta from '../components/Alert/Alert';

import Layout from '../components/layout';

import SEO from '../components/seo';
// Imatges ofertes
import Ofer1 from '../images/ofertes/oferta1.png';
import Ofer2 from '../images/ofertes/oferta2.png';
import Ofer3 from '../images/ofertes/oferta3.jpg';

import './index.scss';

const IndexPage = () => (
	<Container fluid>
		<Layout>
			<SEO title="Home" />
			<Container fluid className="ofertes">
				<Alerta />
				<Row>
					<Col align="center">
						<h1>Ofertes</h1>
					</Col>
				</Row>
				<Row>
					<Col align="center" xs={12} md={4}>
						<Image src={Ofer1} alt="Oferta1" className="oferta" fluid />
					</Col>
					<Col align="center" xs={12} md={4}>
						<Image src={Ofer2} alt="Oferta1" className="oferta" fluid />
					</Col>
					<Col align="center" xs={12} md={4}>
						<Container>
							<Image src={Ofer3} alt="Oferta1" className="oferta" fluid />
						</Container>
					</Col>
				</Row>
			</Container>
		</Layout>
	</Container>
);

export default IndexPage;
