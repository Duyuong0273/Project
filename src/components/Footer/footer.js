import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <Container fluid className="footer-container">
      <Row>
        <Col>
          <a href="#" className="brand-link">
            Pob Fashion
          </a>
          <p>
            The customer is at the heart of our unique business model, which
            includes design.
          </p>
        </Col>
        <Col>
          <h6 className="footer-heading">SHOPPING</h6>
          <a href="#" className="footer-link">
            Clothing Store
          </a>
          <br />
          <a href="#" className="footer-link">
            Trending Shoes
          </a>
          <br />
          <a href="#" className="footer-link">
            Accessories
          </a>
          <br />
          <a href="#" className="footer-link">
            Sale
          </a>
        </Col>
        <Col>
          <h6 className="footer-heading">SUPPORT</h6>
          <a href="tel:0123456789" className="footer-link">
            Hotline: 0123456789
          </a>
          <br />
          <a href="mailto:example@gmail.com" className="footer-link">
            Email: example@gmail.com
          </a>
          <br />
          <a href="#" className="footer-link">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="footer-link">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="footer-link">
            <i className="bi bi-envelope"></i>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr className="footer-hr" />
          <p className="footer-copyright">
            Copyright © 2024 All rights reserved | This template is made with ❤️
            by Colorlib
          </p>
        </Col>
      </Row>
    </Container>
  );
}
