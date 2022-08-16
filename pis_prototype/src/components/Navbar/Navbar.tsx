import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Route } from "../../types";

import "./Navbar.scss";

interface NavBarProps {
	routes: Route[];
}

export default function NavBar(props: NavBarProps) {
	const { routes } = props;

	return (
		<Navbar className="nav-bar" bg="dark" variant="dark" fixed="top">
			<Container>
				<Navbar.Brand>Group Quattre</Navbar.Brand>
				<Nav className="me-auto">
					{routes.map((route) => (
						<Nav.Link>
							<Link className="nav-bar__link" to={route.path}>
								{route.name}
							</Link>
						</Nav.Link>
					))}
				</Nav>
			</Container>
		</Navbar>
	);
}
