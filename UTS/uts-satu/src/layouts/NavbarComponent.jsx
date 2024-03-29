import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbarcomponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Barakah-Istiqomah</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <span>Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/product">
              <span>Products</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <span>Carts</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/transaction">
              <span>Transactions</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <span>About</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarcomponent;
