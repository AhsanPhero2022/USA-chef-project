import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import register from "../../assets/blog/register.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    if (password.length < 6) {
      setError("Password at least 6 character long");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        profileUpdate(name, photo, createdUser);
        console.log(createdUser);
        navigate("/");
      })
      .catch((error) => {
        setError("already exist gmail");
      });
  };

  const profileUpdate = (name, photo, createdUser) => {
    updateProfile(createdUser, {
      displayName: name,
      photoURL: photo,
    })
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        setError("noting");
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

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
          <Form
            onSubmit={handleRegister}
            className="mt-5 shadow-lg w-75   border p-3 rounded bg-info bg-opacity-50"
          >
            <h3>Register</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="photo"
                placeholder="Enter Photo URL"
              />
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
              <Form.Check
                onClick={handleAccepted}
                type="checkbox"
                label={
                  <>
                    Accept{" "}
                    <Link className="text-decoration-none" to="/terms">
                      Terms and Condition
                    </Link>
                  </>
                }
              />
            </Form.Group>
            <Button
              disabled={!accepted}
              className="w-100 mb-2"
              variant="info"
              type="submit"
            >
              Submit
            </Button>
            <h6 className="text-danger ">{error}</h6>
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
