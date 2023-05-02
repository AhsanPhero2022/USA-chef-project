import React from "react";
import { Button, Col, Row, Form, Container } from "react-bootstrap";
import img from "../../assets/blog/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="py-5 mt-5 ">
      <Row>
        <Col lg={6}>
          <div className="text-center   ">
            <h2 className="text-success mt-5 pt-3">
              Login Your Account Carefully
            </h2>
            <img className="mt-4 img-fluid " src={img} alt="" />
          </div>
        </Col>
        <Col lg={6}>
          <Form className="mt-5 shadow-lg w-75  border p-3 rounded bg-info bg-opacity-50">
            <h3>Login</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="w-100 mb-2" variant="info" type="submit">
              Login
            </Button>
            <p>
              Don't have account? <Link to="/register">Register</Link>
            </p>
            <div className="mt-3">
              <button className="btn btn-warning">Google Sign-in</button>
              <button className="btn btn-warning ms-3">GitHub Sign-in</button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;