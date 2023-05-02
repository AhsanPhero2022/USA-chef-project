import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import LeftNav from "./LeftNav";
import Banner from "./Banner";

const HomeLayout = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={9}>
            <Banner></Banner>
          </Col>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeLayout;
