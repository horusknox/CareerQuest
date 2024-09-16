import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CareerQuestLogo from './CareerQuestLogo.jpg';
function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={CareerQuestLogo}
            alt="CareerQuest Logo"
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
            {/* <Nav.Link as={Link} to="/result">Result</Nav.Link> */}
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
            <Nav.Link as={Link} to="/mentordashboard">Mentor Dashboard</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {/* Custom background colors for each button */}
            <Nav.Link as={Link} to="/signup">
              <button className="btn btn-success" style={{ backgroundColor: '#28a745' }}>Sign Up</button>
            </Nav.Link>
            <Nav.Link as={Link} to="/signin">
              <button className="btn btn-info" style={{ backgroundColor: '#17a2b8' }}>Sign In</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
