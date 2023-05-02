import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import register from "../../assets/blog/register.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <div className=" text-center  mt-5 ">
            <h2 className="text-success p-5 mt-5 ">Create Your Own Account</h2>
            <img className=" img-fluid p-5" src={register} alt="" />
          </div>
        </Col>
        <Col lg={6}>
          <Form className="mt-5 shadow-lg w-75   border p-3 rounded bg-info bg-opacity-50">
            <h3>Register</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              name="photo"
              controlId="formBasicEmail"
            >
              <Form.Label>Photo URL</Form.Label>
              <Form.Control type="text" placeholder="Enter Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                required
                name="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="w-100 mb-2" variant="info" type="submit">
              Submit
            </Button>
            <p>
              Have an Account? <Link to="/login">Login</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
