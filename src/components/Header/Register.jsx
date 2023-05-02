import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import register from "../../assets/blog/register.png";

const Register = () => {
  return (
    <>
      <Row>
        <Col lg={6}>
          <div className="text-center mt-5 ">
            <img className="mt-5 img-fluid p-5" src={register} alt="" />
          </div>
        </Col>
        <Col lg={6}>
          <Form className="w-75 my-3 border p-3 rounded bg-info bg-opacity-50">
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;
