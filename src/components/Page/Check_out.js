import React from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Table,
  Card,
  Button,
  Breadcrumb,
} from "react-bootstrap";
import "./Check_out.css"; // Import CSS file

export default function Check_out() {
  return (
    <Container className="checkout-container">
      <Row className="shop-header">
        <Col>
          <h4>Check_out</h4>
          <Breadcrumb className="shop-breadcrumb">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Shop</Breadcrumb.Item>
            <Breadcrumb.Item active>Check_out</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Card className="billing-details">
            <Card.Body>
              <h6 className="billing-header">BILLING DETAILS</h6>
              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="formGridFirstName">
                      <Form.Label>First Name*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGridLastName">
                      <Form.Label>Last Name*</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formGridPhone">
                      <Form.Label>Phone*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter phone number"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>Email*</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email address"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="form-row">
                  <Col>
                    <Form.Group className="mb-3" controlId="formGridCountry">
                      <Form.Label>Country*</Form.Label>
                      <Form.Control type="text" placeholder="Enter country" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="form-row">
                  <Col>
                    <Form.Group controlId="formGridAddress">
                      <Form.Label>Address*</Form.Label>
                      <Form.Control type="text" placeholder="Enter address" />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="order-details">
            <Card.Body>
              <h6>YOUR ORDER</h6>
              <hr />
              <Table striped bordered hover className="order-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>PRODUCT</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>T-shirt Contrast Pocket</td>
                    <td>$30.00</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Diagonal Textured Cap</td>
                    <td>$32.00</td>
                  </tr>
                </tbody>
              </Table>
              <hr />
              <p className="order-total">Subtotal: $62.00</p>
              <p className="order-total">Total: $62.00</p>
              <Button variant="primary" block className="place-order-button">
                PLACE ORDER
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
