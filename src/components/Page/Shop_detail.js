import {
  Col,
  Container,
  Row,
  Breadcrumb,
  Image,
  Button,
  Tab,
  Tabs,
  Card,
} from "react-bootstrap";
import "./shop_detail.css";

export default function Shop_detail() {
  return (
    <Container className="shop-detail-container">
      <Row className="shop-header">
        <Col>
          <h4>Product detail</h4>
          <Breadcrumb className="shop-breadcrumb">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Shop</Breadcrumb.Item>
            <Breadcrumb.Item active>Product detail</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Image src="./Image/Shopdetail/pic1.png" className="product-image" />
        </Col>
        <Col md={6} className="product-details">
          <h1>Men T - shirt</h1>
          <p className="product-price">Price: $ 39.2</p>
          <Row className="size-options">
            <p>Size</p>
            <Col>
              <Button variant="light" className="size-button">
                S
              </Button>
            </Col>
            <Col>
              <Button variant="light" className="size-button">
                M
              </Button>
            </Col>
            <Col>
              <Button variant="light" className="size-button">
                L
              </Button>
            </Col>
            <Col>
              <Button variant="light" className="size-button">
                XL
              </Button>
            </Col>
          </Row>
          <Row className="quantity-add-cart">
            <p>Quantity</p>
            <Col>
              <Button variant="primary" className="quantity-button">
                Quantity
              </Button>
            </Col>
            <Col>
              <Button variant="dark" className="add-cart-button">
                Add to cart
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Tabs
            defaultActiveKey="Description"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="Description" title="Description">
              <p className="tab-title">Products Information</p>
              <p>
                A Pocket PC is a handheld computer, which features many of the
                same capabilities as a modern PC. These handy little devices
                allow individuals to retrieve and store e-mail messages, create
                a contact file, coordinate appointments, surf the internet,
                exchange text messages and more. Every product that is labeled
                as a Pocket PC must be accompanied with specific software to
                operate the unit and must feature a touchscreen and touchpad. As
                is the case with any new technology product, the cost of a
                Pocket PC was substantial during it’s early release. For
                approximately $700.00, consumers could purchase one of
                top-of-the-line Pocket PCs in 2003. These days, customers are
                finding that prices have become much more reasonable now that
                the newness is wearing off. For approximately $350.00, a new
                Pocket PC can now be purchased.
              </p>
              <p className="tab-title">Material used</p>
              <p>
                Polyester is deemed lower quality due to its none natural
                quality’s. Made from synthetic materials, not natural like wool.
                Polyester suits become creased easily and are known for not
                being breathable. Polyester suits tend to have a shine to them
                compared to wool and cotton suits, this can make the suit look
                cheap. The texture of velvet is luxurious and breathable. Velvet
                is a great choice for dinner party jacket and can be worn all
                year round.
              </p>
            </Tab>
            <Tab eventKey="Customer Previews" title="Customer Previews">
              Tab content for Customer Previews
            </Tab>
            <Tab
              eventKey="Additional information"
              title="Additional information"
            >
              <p className="tab-title">Product Groups</p>
              <ul>
                <li>T-shirt: T-shirt</li>
                <li>Shape: Loose</li>
                <li>Sex: Men</li>
              </ul>
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="related-product-title">Related Products</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="related-product-card">
            <Card.Img variant="top" src="./Image/Shopdetail/pic2.png" />
            <Card.Body>
              <Card.Title>
                Performance Care Men's Short Sleeve Polo Shirt, Plain Fitted
                Form
              </Card.Title>
              <Card.Text>Price: $ 59.8</Card.Text>
              <Button variant="primary">View product</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="related-product-card">
            <Card.Img variant="top" src="./Image/Shopdetail/pic3.png" />
            <Card.Body>
              <Card.Title>Men's T-shirt. Loose</Card.Title>
              <Card.Text>Price: $ 67.24</Card.Text>
              <Button variant="primary">View product</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="related-product-card">
            <Card.Img variant="top" src="./Image/Shopdetail/pic4.png" />
            <Card.Body>
              <Card.Title>
                Men's Short Sleeve T-shirt 100% Cotton Printed Loose Form
              </Card.Title>
              <Card.Text>Price: $ 47.1</Card.Text>
              <Button variant="primary">View product</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="related-product-card">
            <Card.Img variant="top" src="./Image/Shopdetail/pic5.png" />
            <Card.Body>
              <Card.Title>
                Unisex Cotton Short Sleeve T-shirt with Loose Form Print
              </Card.Title>
              <Card.Text>Price: $ 39.8</Card.Text>
              <Button variant="primary">View product</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
