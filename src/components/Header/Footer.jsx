import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className=" bg-dark text-white py-4 mt-5 ">
      <Container>
        <Row>
          <Col md={6}>
            <h3>About Us</h3>
            <p>
              We are a team of passionate chefs who love creating delicious and
              healthy dishes. Our mission is to provide our customers with the
              best dining experience possible.
            </p>
          </Col>
          <Col md={3}>
            <h3>Contact Us</h3>
            <p>123 Main Street</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col md={3}>
            <h3>Follow Us</h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Facebook</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Twitter</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Our Restaurant. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
