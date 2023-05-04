import React, { useContext, useState } from "react";
import { Button, Col, Row, Form, Container } from "react-bootstrap";
import img from "../../assets/blog/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleLogin, gitHubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("Incorrect Password");
      });
  };

  const handleGitLogin = () => {
    gitHubLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error);
      });
  };

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
          <Form
            onSubmit={handleLogin}
            className="mt-5 shadow-lg w-75  border p-3 rounded bg-info bg-opacity-50"
          >
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
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button className="w-100 my-4" variant="info" type="submit">
              Login
            </Button>
            <p className="text-danger">{error}</p>
            <p>
              Don't have account? <Link to="/register">Register</Link>
            </p>
          </Form>
          <div className="mt-3">
            <button onClick={handleGoogleLogin} className="btn btn-warning">
              Google Sign-in
            </button>
            <button onClick={handleGitLogin} className="btn btn-warning ms-3">
              GitHub Sign-in
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
