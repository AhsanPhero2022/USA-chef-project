import React from "react";
import img from "../../assets/images (4).jpg";
import like from "../../assets/download.jpg";

import { Col, Container, Row } from "react-bootstrap";

const ExtraSection = () => {
  return (
    <>
      <h2 className="text-center my-5 text-white p-4 bg-info container rounded">
        Best Liked US People Food is Here
      </h2>
      <Container className="mx-auto m-5 border p-5 rounded bg-info bg-opacity-50">
        <Row>
          <Col lg={6}>
            <div className="text-center">
              <img src={img} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <h2>Best food for USA people</h2>
            <p>
              You've probably heard the phrase “as American as apple pie” and
              it's not without reason. Probably the most iconic of American
              foods, apple pie was first introduced in the States by British and
              Dutch immigrants.
            </p>
            <button className="btn btn-info">Like It!</button>
          </Col>
        </Row>
      </Container>
      <Container className="mx-auto bg-info bg-opacity-50 m-5 border p-5 rounded">
        <Row>
          <Col lg={6}>
            <h2>Most wanted food for USA people</h2>
            <p>
              You've probably heard the phrase “as American as apple pie” and
              it's not without reason. Probably the most iconic of American
              foods, apple pie was first introduced in the States by British and
              Dutch immigrants.
            </p>
            <button className="btn btn-info">Like It!</button>
          </Col>
          <Col lg={6}>
            <div className=" text-center">
              <img src={like} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExtraSection;
