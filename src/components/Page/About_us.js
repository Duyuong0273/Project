import { Col, Container, Row, Image, Breadcrumb, Card } from "react-bootstrap";
import "./about_us.css";

export default function About() {
  return (
    <Container>
      <Row className="shop-header">
        <Col>
          <h4>About us</h4>
          <Breadcrumb className="shop-breadcrumb">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>About us</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image
            src="./Image/Pages/pic1.png"
            fluid
            className="responsive-image"
          />
        </Col>
      </Row>
      <Row className="about-section">
        <Col>
          <h4>Who We Are ?</h4>
          <p>
            Contextual advertising programs sometimes have strict policies that
            need to be adhered to. Let’s take Google as an example.
          </p>
        </Col>
        <Col>
          <h4>What We Do ?</h4>
          <p>
            In this digital generation where information can be easily obtained
            within seconds, business cards still have retained their importance.
          </p>
        </Col>
        <Col>
          <h4>Why Choose Us</h4>
          <p>
            A two or three-storey house is the ideal way to maximize the piece
            of earth on which our home sits, but for older or infirm people.
          </p>
        </Col>
      </Row>
      <Row className="team-section">
        <Col xs={12}>
          <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
            Meet Our Team
          </h2>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="team-card">
            <Card.Img variant="top" src="./Image/Pages/per1.png" />
            <Card.Body>
              <Card.Title>John Smith</Card.Title>
              <Card.Text>Fashion Design</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="team-card">
            <Card.Img variant="top" src="./Image/Pages/per2.png" />
            <Card.Body>
              <Card.Title>Christine Wise</Card.Title>
              <Card.Text>C.E.O</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="team-card">
            <Card.Img variant="top" src="./Image/Pages/per3.png" />
            <Card.Body>
              <Card.Title>Sean Robbins</Card.Title>
              <Card.Text>Manager</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="team-card">
            <Card.Img variant="top" src="./Image/Pages/per4.png" />
            <Card.Body>
              <Card.Title>Lucy Myers</Card.Title>
              <Card.Text>Delivery</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
