import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsLinkedin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Navegation = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">LDS</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link onClick={() => navigate("/")}>About</Nav.Link>
            <Nav.Link onClick={() => navigate("/portfolio")}>
              Portfolio
            </Nav.Link>
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
