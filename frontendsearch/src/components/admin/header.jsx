import React, { Component } from "react";
import logo from "../../1.jpeg";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { GiConverseShoe } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";
class Header1 extends Component {
  state = {};
  signout = () => {
    localStorage.removeItem("token");
    window.location.reload(true);
  };
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          {" "}
          <Container>
            <Navbar.Brand href="#home" style={{ marginLeft: "40px" }}>
              <GiConverseShoe color="white" size={50} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <HashLink to="/admindashboard#top">Dashboard</HashLink>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <HashLink to="/addshoes#top">Add Shoes</HashLink>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link>
                  {" "}
                  <HashLink onClick={this.signout}>Sign out</HashLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>{" "}
          </Container>
        </Navbar>{" "}
      </div>
    );
  }
}

export default Header1;
