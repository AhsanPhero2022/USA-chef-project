import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import component from "../../assets/blog/components.png";
import props from "../../assets/blog/props.jpeg";
import express from "../../assets/blog/expressjs.png";
import custom from "../../assets/blog/cutom.jpg";

const Blog = () => {
  return (
    <>
      <h2 className="text-center mt-5 text-white bg-info container rounded p-3">
        All Question Answer is Here.
      </h2>
      <Container className="mx-auto bg-info bg-opacity-50 m-5 border p-5 rounded">
        <Row>
          <Col lg={6}>
            <h5>
              What is differences between uncontrolled and controlled
              components?
            </h5>
            <p>
              In an uncontrolled component, the value of the form element is
              handled by the DOM itself. This means that the component's state
              and the value of the form element may not always be in sync. To
              get the value of the form element, you need to access the DOM
              using a ref.
            </p>
          </Col>
          <Col lg={6}>
            <div className=" text-center">
              <img className="img-fluid w-100 " src={component} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mx-auto bg-info bg-opacity-50 m-5 border p-5 rounded">
        <Row>
          <Col lg={6}>
            <h5>How to validate React props using PropTypes?</h5>
            <p>
              To validate React props using PropTypes, we need to import the
              PropTypes package from the 'prop-types'. If some of the props
              aren't using the correct type that we assigned, we will get a
              console warning. After we specify validation patterns, we will set
              App. defaultProps.
            </p>
          </Col>
          <Col lg={6}>
            <div className=" text-center">
              <img className="img-fluid w-100 " src={props} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mx-auto bg-info bg-opacity-50 m-5 border p-5 rounded">
        <Row>
          <Col lg={6}>
            <h5>What is difference between nodejs and express js.</h5>
            <p>
              Node.js is a runtime environment for executing JavaScript code
              outside of a web browser. It is built on top of the V8 JavaScript
              engine and allows developers to write server-side code using
              JavaScript. Node.js provides a set of built-in modules for
              handling file I/O, networking, and other system-level tasks.
              <br />
              Express.js is a web application framework built on top of Node.js.
              It provides a set of APIs and tools for building web applications
              and APIs. Express.js allows developers to handle HTTP requests,
              define routes, and interact with databases and other third-party
              services.
              <br /> In summary: Node.js provides the runtime environment for
              executing JavaScript code, while Express.js provides the framework
              for building web applications and APIs on top of Node.js.
            </p>
          </Col>
          <Col lg={6}>
            <div className=" text-center">
              <img className="img-fluid w-100 pt-4" src={express} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mx-auto bg-info bg-opacity-50 m-5 border p-5 rounded">
        <Row>
          <Col lg={6}>
            <h5>
              What is a custom hook, and why will you create a custom hook?
            </h5>
            <p>
              A custom hook is a reusable function in React that allows you to
              abstract away complex logic from the component and reuse it across
              multiple components. A custom hook can use other hooks and allows
              you to share stateful logic between multiple components.
              <br />
              Custom hooks are useful when you need to share logic between two
              or more components, or when you have some complex logic that you
              want to extract from a component to keep it clean and reusable.
              services.
              <br />
              <br /> Creating a custom hook helps in reducing code duplication,
              improving code readability, and making code maintainable. By
              creating a custom hook, you can extract the common logic from the
              components, test it independently, and reuse it throughout the
              application.
            </p>
          </Col>
          <Col lg={6}>
            <div className=" text-center">
              <img className="img-fluid w-100 pt-5" src={custom} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
