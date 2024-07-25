import React from "react";
import { Container, Nav, NavDropdown, Navbar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchText = formData.get("searchText");
    console.log("Search for:", searchText);
    // Implement your search functionality here
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="brand-name">
          Pob Fashion
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop" className="nav-link-custom">
              Shop
            </Nav.Link>
            <NavDropdown
              title="Page"
              id="navbarScrollingDropdown"
              className="nav-link-custom"
            >
              <NavDropdown.Item as={Link} to="/about">
                About us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop-detail">
                Shop Detail
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shopping-cart">
                Shop Cart
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/check-out">
                Check out
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>
          <Form
            onSubmit={handleSearchSubmit}
            className="d-flex align-items-center ms-auto"
          >
            <Form.Control
              name="searchText"
              type="search"
              placeholder="Search"
              className="me-2 flex-grow-1 search-input"
              aria-label="Search"
            />
          </Form>
          <i className="bi bi-search"></i>
          <Link
            to="/login-register"
            className="d-flex align-items-center text-decoration-none user-icon"
          >
            <i className="bi bi-person"></i>
          </Link>
          <Link
            to="/shopping-cart"
            className="d-flex align-items-center text-decoration-none cart-icon"
          >
            <i className="bi bi-bag me-1"></i>
            <span>0</span>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
