import React from "react";
import {
  Col,
  Container,
  Row,
  Breadcrumb,
  Table,
  Form,
  Button,
  InputGroup,
  Card,
} from "react-bootstrap";
import "./Shopping_cart.css"; // Import the CSS file

export default function Shopping_Cart() {
  return (
    <Container>
      <Row className="shop-header">
        <Col>
          <h4>Shopping Cart</h4>
          <Breadcrumb className="shop-breadcrumb">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Shop</Breadcrumb.Item>
            <Breadcrumb.Item active>Shopping Cart</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>PRODUCT</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>T-shirt Contrast Pocket</td>
                <td>1</td>
                <td>$30.00</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Diagonal Textured Cap</td>
                <td>1</td>
                <td>$32.00</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col lg={4}>
          <h6>DISCOUNT CODES</h6>
          <Form className="discount-form">
            <InputGroup>
              <Form.Control type="text" placeholder="Enter discount code" />
              <Button variant="outline-secondary">APPLY</Button>
            </InputGroup>
          </Form>
          <hr />
          <Card className="cart-total-card">
            <Card.Body>
              <h6>CART TOTAL</h6>
              <p>Subtotal: $30.00</p>
              <p>Subtotal: $32.00</p>
              <p>Total: $62.00</p>
              <hr />
              <Row>
                <Col>
                  <Button variant="secondary" className="w-100">
                    Continue Shopping
                  </Button>
                </Col>
                <Col>
                  <Button variant="primary" className="w-100">
                    Pay
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
