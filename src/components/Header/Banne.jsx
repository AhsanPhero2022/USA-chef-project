import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Banne = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => Console.log(error));
  };
  console.log(user);
  const tooltip = <Tooltip id="tooltip">{user && user.displayName}</Tooltip>;
  return (
    <Navbar bg="light" expand="lg" className="mb-2">
      <Container>
        <Navbar.Brand className="">
          <h4>Popular US Chef</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <NavLink className="ms-5 text-decoration-none" to="/">
              Home
            </NavLink>
            <NavLink className="ms-5 text-decoration-none" to="/blog">
              Blog
            </NavLink>
            <NavLink className="ms-5 text-decoration-none" to="/terms">
              Terms
            </NavLink>
          </Nav>
          <div>
            <Link className="text-success text-decoration-none me-2">
              {user ? user.displayName : ""}
            </Link>
            {user ? (
              <OverlayTrigger placement="left" overlay={tooltip}>
                <img
                  className="rounded-circle me-2 w-25"
                  src={user.photoURL}
                  alt=""
                />
              </OverlayTrigger>
            ) : (
              <Link to="/login">
                <button className="btn btn-info">Login</button>
              </Link>
            )}
            {user ? (
              <Link>
                <button onClick={handleLogout} className="btn btn-info ">
                  Logout
                </button>
              </Link>
            ) : (
              ""
            )}
            {!user && (
              <Link to="/register">
                <button className="ms-4 btn btn-info">Register</button>
              </Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Banne;
