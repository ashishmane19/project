import React, { Component } from 'react';
import {Navbar,Nav,Container,NavDropdown,Card} from 'react-bootstrap';


class AdminDashBoard extends Component {
    render() {
        return (
            <div>
                <div>
            
              <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="./Home">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Dropdown"
          menuVariant="dark"
        >
         <NavDropdown.Item href="./AddMatch">Add Match</NavDropdown.Item>
          <NavDropdown.Item href="./AddStadium">Add Stadium</NavDropdown.Item>
          <NavDropdown.Item href="./StadiumList">show Listed Stadiums</NavDropdown.Item>
          
          <NavDropdown.Item href="./Matchs">Show Listed Matchs</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
       
      </Nav>
      <Nav className=" text-right">
      
      <Nav.Link href="./Logout">SignOut</Nav.Link>

    
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>

</div>
            
        );
    }
}

export default AdminDashBoard;