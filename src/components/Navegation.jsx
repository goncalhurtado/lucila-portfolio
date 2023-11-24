import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsLinkedin } from "react-icons/bs";

const Navegation = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">LDS</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Portfolio</Nav.Link>
            <Nav.Link>
              <BsLinkedin />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegation;
