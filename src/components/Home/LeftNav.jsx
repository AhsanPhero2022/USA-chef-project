import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../assets/images (1).jpg";
import second from "../../assets/images.jpg";
import third from "../../assets/images (4).jpg";
import fourth from "../../assets/images (3).jpg";
import five from "../../assets/images(2).jpg";

const LeftNav = () => {
  return (
    <div className="position-sticky top-0">
      <h4 className="text-info">Most Famous Food in USA</h4>
      <Col>
        <Card className="my-2 mt-5">
          <Card.Img src={first} />
          <Card.Body>
            <Card.Title>Cornbread</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="my-2">
          <Card.Img variant="top" src={second} />
          <Card.Body>
            <Card.Title>Clam Chowder</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="my-2">
          <Card.Img variant="top" src={third} />
          <Card.Body>
            <Card.Title>The Hamburger</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="my-2">
          <Card.Img variant="top" src={fourth} />
          <Card.Body>
            <Card.Title>Texas Barbecue</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="my-2">
          <Card.Img variant="top" src={five} />
          <Card.Body>
            <Card.Title>Texas Barbecue</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default LeftNav;
