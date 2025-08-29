import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-3 mt-5">
      <Container>
        <Row className="align-items-center">
          {/* Left side - Copyright */}
          <Col md={6} sm={12} className="text-center text-md-start mb-2 mb-md-0">
            <small>© {new Date().getFullYear()} Horizon Homes Real Estate. All Rights Reserved.</small>
          </Col>

          {/* Right side - Navigation Menu */}
          <Col md={6} sm={12} className="text-center text-md-end">
            <Nav className="justify-content-center justify-content-md-end">
              <Nav.Item>
                <Nav.Link href="#properties" className="text-light px-2">Properties</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about" className="text-light px-2">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact" className="text-light px-2">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
