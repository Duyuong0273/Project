import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Breadcrumb,
  Table,
  Button,
  CardBody,
} from "react-bootstrap";
import "./Manager.css";

export default function Manager() {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [showEditProductForm, setShowEditProductForm] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleAddProductClick = () => {
    setShowAddProductForm(!showAddProductForm);
    setShowEditProductForm(false);
  };

  const handleEditProductClick = (product) => {
    setCurrentProduct(product);
    setShowEditProductForm(true);
    setShowAddProductForm(false);
  };

  return (
    <Container className="manager-container">
      <Row className="shop-header">
        <Col>
          <h4 className="text-center mb-4">Manager</h4>
          <Breadcrumb className="shop-breadcrumb">
            <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active>Overview</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="side-card shadow-sm mb-4">
            <Card.Body>
              <Button variant="primary" className="w-100 mb-3">
                <i className="bi bi-speedometer2 me-2"></i> Dashboard
              </Button>
              <Button variant="primary" className="w-100">
                <i className="bi bi-graph-up me-2"></i> Data
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="main-card shadow-sm mb-4">
            <Card.Body>
              <h5 className="card-title mb-3">
                <i className="bi bi-table me-2"></i> Data table
              </h5>
              <hr />
              <Row className="mb-4">
                <Col md={8}>
                  <Form>
                    <Form.Control type="search" placeholder="Search" />
                  </Form>
                </Col>
                <Col md={4} className="text-md-end">
                  <Button variant="success" onClick={handleAddProductClick}>
                    Add product
                  </Button>
                </Col>
              </Row>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>T-shirt Contrast Pocket</td>
                    <td>$30.0</td>
                    <td>86</td>
                    <td>
                      <img
                        src="./Image/Manager/pic1.png"
                        alt="Product"
                        className="img-thumbnail"
                        style={{ width: "50px" }}
                      />
                    </td>
                    <td>
                      <Button
                        variant="link"
                        className="p-0"
                        onClick={() =>
                          handleEditProductClick({
                            id: 1,
                            name: "T-shirt Contrast Pocket",
                            price: "$30.0",
                            quantity: 86,
                            image: "./Image/Manager/pic1.png",
                          })
                        }
                      >
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                      </Button>
                      <Button variant="link" className="p-0">
                        <i className="bi bi-trash text-danger"></i>
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Polo</td>
                    <td>$300.0</td>
                    <td>876</td>
                    <td>
                      <img
                        src="./Image/Manager/pic2.png"
                        alt="Product"
                        className="img-thumbnail"
                        style={{ width: "50px" }}
                      />
                    </td>
                    <td>
                      <Button
                        variant="link"
                        className="p-0"
                        onClick={() =>
                          handleEditProductClick({
                            id: 2,
                            name: "Polo",
                            price: "$300.0",
                            quantity: 876,
                            image: "./Image/Manager/pic2.png",
                          })
                        }
                      >
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                      </Button>
                      <Button variant="link" className="p-0">
                        <i className="bi bi-trash text-danger"></i>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {showAddProductForm && (
        <Row>
          <Col md={12}>
            <Card className="add-product-card shadow-sm mb-4">
              <Card.Body>
                <h4 className="mb-4">Add product</h4>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Image URL" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Price" />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" />
                  </Form.Group>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="secondary"
                      onClick={handleAddProductClick}
                      className="me-2"
                    >
                      Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                      Add
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      {showEditProductForm && currentProduct && (
        <Row>
          <Col md={12}>
            <Card className="edit-product-card shadow-sm mb-4">
              <Card.Body>
                <h4 className="mb-4">Edit product</h4>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      defaultValue={currentProduct.name}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Image URL"
                      defaultValue={currentProduct.image}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Price"
                      defaultValue={currentProduct.price}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Description"
                      defaultValue={currentProduct.description}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="secondary"
                      onClick={() => setShowEditProductForm(false)}
                      className="me-2"
                    >
                      Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                      Save
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}
