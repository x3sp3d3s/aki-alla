// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../images/logo.png';
import Premis from '../images/titols.jpg';
import { Navbar, Image, Nav, NavDropdown } from 'react-bootstrap';
import Logotip from '../images/logo.png';
import { Link } from 'gatsby';

import './header.scss';

const Header = ({ siteTitle }) => (
	<Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="nav-bar">
		<Navbar.Brand className="nav-bar__item">
			<Link to="/" className="link">
				<Image src={Logotip} width="30px" height="30px" className="nav-bar__item-logo" />
				Pizzeria Aki Alla
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="mr-auto">
				<NavDropdown title="Pizzes" id="collasible-nav-dropdown">
					<NavDropdown.Item>
						<Link to="/pizza" className="link">
							Normals
						</Link>
					</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">De Carn</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Del Mar</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.4">Calzone</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.4">Vegetals</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.4">Formatges i Cremes</NavDropdown.Item>
				</NavDropdown>
				<Nav.Link href="#features">Pollastre RFC</Nav.Link>
				<Nav.Link href="#pricing">Burguers</Nav.Link>
				<Nav.Link href="#pricing">Focaccia</Nav.Link>
				<NavDropdown title="Complements" id="collasible-nav-dropdown">
					<NavDropdown.Item href="#action/3.1">Patates</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.2">Amanides</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.3">Altres</NavDropdown.Item>
				</NavDropdown>

				<Nav.Link href="#pricing">Bruschetta</Nav.Link>
				<Nav.Link href="#pricing">Mexicà</Nav.Link>
				<Nav.Link href="#pricing">Cassoles</Nav.Link>

				<Nav.Link href="#features">Kebbabs</Nav.Link>
				<Nav.Link href="#pricing">Begudes</Nav.Link>
				<Nav.Link href="#pricing">Gelats i Postres</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
