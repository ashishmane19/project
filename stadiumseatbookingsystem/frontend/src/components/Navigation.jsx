
import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';




class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>

            <Nav className="me-auto">
              <Nav.Link href="./Home">Home</Nav.Link>
              <Nav.Link href="./Matchs">Matchs</Nav.Link>
            </Nav>
            <Nav className="me-auto ">

            </Nav>
            <Nav className=" text-right">
              <Nav.Link href="./Login">SignIn</Nav.Link>

              <Nav.Link href="./Registration">Signup</Nav.Link>
            </Nav>

          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;