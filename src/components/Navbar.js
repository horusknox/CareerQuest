import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CareerQuestLogo from './CareerQuestLogo.jpg';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/CareerQuest">
          <img
            src={CareerQuestLogo}
            alt="CareerQuest Logo"
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/CareerQuest">Home</Nav.Link>
            <Nav.Link as={Link} to="/Quiz">Quiz</Nav.Link>
            {/* <Nav.Link as={Link} to="/result">Result</Nav.Link> */}
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
            <Nav.Link as={Link} to="/mentordashboard">Mentor Dashboard</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {/* Custom background colors for each button */}
            <Nav.Link as={Link} to="/signup">
              <button className="btn btn-success" style={{ backgroundColor: '#28a745', border: 'none' }}>Sign Up</button>
            </Nav.Link>
            <Nav.Link as={Link} to="/signin">
              <button className="btn btn-info" style={{ backgroundColor: '#17a2b8', border: 'none' }}>Sign In</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;