import React, { useState } from "react";
import { Carousel, Row, Col, Container, Card, Button } from "react-bootstrap";
import "./Homepage.css";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Best Seller");

  const renderProducts = (category) => {
    // Example products, replace these with your actual products
    const products = {
      "Best Seller": [
        {
          imgSrc: "./Image/Fashion_new_trending/pic1.png",
          title: "Silver Metal Y2K Playboy Necklace",
          text: "Ooze style by adding one of our most popular styles of jewellery to your collection – introducing the infamous Playboy necklace.",
        },
        {
          imgSrc: "./Image/Fashion_new_trending/pic2.png",
          title: "Silver Metal Playboy Bunny Necklace",
          text: "Ooze style by adding one of our most popular styles of jewellery to your collection – introducing the infamous Playboy pendant necklace.",
        },
        {
          imgSrc: "./Image/Fashion_new_trending/pic3.png",
          title: "SHESHA NECKLACE",
          text: "One of the iconic Lost Gen Club necklaces. The Shesha necklace is a stunning piece of jewelry inspired by the ancient Hindu king of snakes, Shesha, who is said to hold all the planets of the universe.",
        },
      ],
      New: [
        // Add products for "New"
        {
          imgSrc: "./Image/Fashion_new_trending/pic1.png",
          title: "Silver Metal Y2K Playboy Necklace",
          text: "Ooze style by adding one of our most popular styles of jewellery to your collection – introducing the infamous Playboy necklace.",
        },
        {
          imgSrc: "./Image/Fashion_new_trending/pic2.png",
          title: "Silver Metal Playboy Bunny Necklace",
          text: "Ooze style by adding one of our most popular styles of jewellery to your collection – introducing the infamous Playboy pendant necklace.",
        },
        {
          imgSrc: "./Image/Fashion_new_trending/pic3.png",
          title: "SHESHA NECKLACE",
          text: "One of the iconic Lost Gen Club necklaces. The Shesha necklace is a stunning piece of jewelry inspired by the ancient Hindu king of snakes, Shesha, who is said to hold all the planets of the universe.",
        },
      ],
      Sale: [
        // Add products for "Sale"
        {
          imgSrc: "./Image/Fashion_new_trending/pic1.png",
          title: "Silver Metal Y2K Playboy Necklace",
          text: "Ooze style by adding one of our most popular styles of jewellery to your collection – introducing the infamous Playboy necklace.",
        },
        {
          imgSrc: "./Image/Fashion_new_trending/pic2.png",
          title: "Silver Metal Playboy Bunny Necklace",
          text: "Ooze style by adding one of our most popular styles of jewellery to your collection – introducing the infamous Playboy pendant necklace.",
        },
        {
          imgSrc: "./Image/Fashion_new_trending/pic3.png",
          title: "SHESHA NECKLACE",
          text: "One of the iconic Lost Gen Club necklaces. The Shesha necklace is a stunning piece of jewelry inspired by the ancient Hindu king of snakes, Shesha, who is said to hold all the planets of the universe.",
        },
      ],
    };

    return products[category].map((product, index) => (
      <Col key={index}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.imgSrc} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.text}</Card.Text>
            <Button variant="primary">
              <i className="bi bi-arrow-right"></i>
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <Container>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img src="./Image/Homepage/pic1.png" title="Polo" alt="Polo" />
              <Carousel.Caption>
                <h3>POLO PREMIUM</h3>
                <p>Elegant style</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="./Image/Homepage/pic2.png"
                title="T-shirt"
                alt="T-shirt"
              />
              <Carousel.Caption>
                <h3>T-shirt</h3>
                <p>Youthful</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="./Image/Homepage/pic3.png"
                title="personality"
                alt="personality"
              />
              <Carousel.Caption>
                <h3>Personality</h3>
                <p>Dynamic</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="./Image/Homepage/pic4.png" title="relax" alt="relax" />
              <Carousel.Caption>
                <h3>Relax</h3>
                <p>Gentle and flexible</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2
            style={{
              fontWeight: "bold",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => setSelectedCategory("Best Seller")}
          >
            Best Seller
          </h2>
        </Col>
        <Col>
          <h2
            style={{
              fontWeight: "bold",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => setSelectedCategory("New")}
          >
            New
          </h2>
        </Col>
        <Col>
          <h2
            style={{
              fontWeight: "bold",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => setSelectedCategory("Sale")}
          >
            Sale
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
            Fashion New Trends
          </h2>
        </Col>
        <hr />
        {renderProducts(selectedCategory)}
      </Row>
    </Container>
  );
}
