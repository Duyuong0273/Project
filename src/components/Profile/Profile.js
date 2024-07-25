import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Breadcrumb,
  Card,
  Dropdown,
  Button,
  Form,
  Table,
} from "react-bootstrap";
import "./Profile.css";

export default function Profile() {
  const [view, setView] = useState("account"); // "account", "edit", or "orderHistory"

  const handleRevisionClick = () => {
    setView("edit");
  };

  const handleReturnClick = () => {
    setView("account");
  };

  const handleOrderHistoryClick = () => {
    setView("orderHistory");
  };

  return (
    <Container>
      <Row className="Profile">
        <Col>
          <h4>Profile</h4>
          <Breadcrumb className="profile-breadcrumb">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Profile</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="profile-card">
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-primary"
                id="dropdown-basic"
                className="profile-button"
              >
                My Account
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setView("account")}>
                  Personal information
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-primary"
                id="dropdown-basic"
                className="profile-button"
              >
                Order
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleOrderHistoryClick}>
                  Order history
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card>
        </Col>
        {view === "account" && (
          <Col>
            <Card className="profile-card">
              <h1>MY ACCOUNT</h1>
              <hr />
              <p style={{ fontWeight: "bold" }}>My account</p>
              <p>First and last name: Mr A</p>
              <p>Email: example@mail.com</p>
              <p>Phone: 123456789</p>
              <p>Address: Viet Nam </p>
              <Button className="profile-button" onClick={handleRevisionClick}>
                Revision
              </Button>
            </Card>
          </Col>
        )}
        {view === "edit" && (
          <Col>
            <Card className="profile-card">
              <h1>EDIT PERSONAL INFORMATION</h1>
              <hr />
              <p style={{ fontWeight: "bold" }}>EDIT</p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicFirstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicemail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicaddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicphone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="Phone" />
                </Form.Group>
              </Form>
              <Button className="profile-button" onClick={handleReturnClick}>
                Finish
              </Button>
              <Button
                style={{ margin: "10px" }}
                className="profile-button"
                onClick={handleReturnClick}
              >
                Return
              </Button>
            </Card>
          </Col>
        )}
        {view === "orderHistory" && (
          <Col>
            <Card>
              <h1>ORDER HISTORY</h1>
              <hr />
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>T-shirt Contrast Pocket</td>
                    <td>1</td>
                    <td>$30.00</td>
                    <td style={{ color: "green" }}>Finish</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>T-shirt </td>
                    <td>10</td>
                    <td>$560.00</td>
                    <td style={{ color: "green" }}>Finish</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
}
