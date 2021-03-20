import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const navBar = (props) => (
  <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home"> Oslo Akershus Castle</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto  m-2">
          <LinkContainer exact to="/">
            <Nav.Link> Home</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/Location">
            <Nav.Link>Location</Nav.Link>
          </LinkContainer>
          <LinkContainer exact to="/Contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default navBar;
