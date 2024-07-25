// Shop.js
import React from "react";
import {
  Col,
  Container,
  Row,
  Breadcrumb,
  Form,
  Dropdown,
  Card,
  Button,
  Pagination,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./shop.css"; // Import the CSS file

const FilterSelect = ({ label, options }) => (
  <div className="filter-select">
    <Form.Select aria-label={`Select ${label}`} className="shop-select">
      <option value="">{label.toUpperCase()}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Form.Select>
    <hr />
  </div>
);

const ProductCard = ({ title, price, imgSrc }) => {
  const navigate = useNavigate();

  const handleViewDescription = () => {
    navigate("/shop-detail"); // Navigate to the shop-detail page
  };

  return (
    <Card className="mb-4 product-card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary" onClick={handleViewDescription}>
          View description
        </Button>
      </Card.Body>
    </Card>
  );
};

export default function Shop() {
  return (
    <Container className="shop-container">
      <Row className="shop-header">
        <Col>
          <h4>Shop</h4>
          <Breadcrumb className="shop-breadcrumb">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Shop</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col md={9}>
          <Form.Control
            name="searchText"
            type="search"
            placeholder="Search"
            className="shop-search"
          />
        </Col>
        <Col md={3} className="text-md-end">
          <p className="d-inline">Sort by Price: </p>
          <Dropdown className="d-inline">
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="shop-dropdown-toggle"
            >
              Low to High
            </Dropdown.Toggle>
            <Dropdown.Menu className="shop-dropdown-menu">
              <Dropdown.Item href="#/action-1">$0-$55</Dropdown.Item>
              <Dropdown.Item href="#/action-2">$55-$100</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <FilterSelect
            label="Categories"
            options={[
              "Men",
              "Women",
              "Bags",
              "Clothing",
              "Shoes",
              "Accessories",
              "Kids",
            ]}
          />
          <FilterSelect
            label="Brands"
            options={["Louis Vuitton", "Chanel", "Hermes", "Gucci"]}
          />
          <FilterSelect
            label="Price Range"
            options={[
              "$0.00 - $50.00",
              "$50.00 - $100.00",
              "$100.00 - $150.00",
              "$150.00 - $200.00",
              "$200.00 - $250.00",
              "$250.00+",
            ]}
          />
          <FilterSelect
            label="Sizes"
            options={["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"]}
          />
        </Col>
        <Col md={9}>
          <Row>
            <Col md={4}>
              <ProductCard
                title="Men's Polo Shirt Ribbed Fabric With Decorative Form Fitted Fabric"
                price="$26.24"
                imgSrc="./Image/Shop/pic1.png"
              />
            </Col>
            <Col md={4}>
              <ProductCard
                title="Loose Form Plaid Long Sleeve Unisex Shirt"
                price="$56.24"
                imgSrc="./Image/Shop/pic2.png"
              />
            </Col>
            <Col md={4}>
              <ProductCard
                title="Men's Short-Sleeved Polo Shirt with Zipper Collar, Form Fitted Color Mix"
                price="$100.24"
                imgSrc="./Image/Shop/pic3.png"
              />
            </Col>
            <Col md={4}>
              <ProductCard
                title="Men's Polo Shirt Interlock Pique Horizontal Stripes Label Decorative Boxy Form"
                price="$93.24"
                imgSrc="./Image/Shop/pic4.png"
              />
            </Col>
            <Col md={4}>
              <ProductCard
                title="Women's Plain Linen 2-String Shirt Regular Form"
                price="$10.24"
                imgSrc="./Image/Shop/pic5.png"
              />
            </Col>
            <Col md={4}>
              <ProductCard
                title="Women's Loose Form Cotton Plaid Long Sleeve Shirt"
                price="$74.24"
                imgSrc="./Image/Shop/pic6.png"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Row>
    </Container>
  );
}
