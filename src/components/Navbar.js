import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CareerQuestLogo from './CareerQuestLogo.jpg';

function NavigationBar() {
  const [hovered, setHovered] = useState(null);

  const navLinkStyle = (isHovered) => ({
    color: isHovered ? 'black' : 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    backgroundColor: isHovered ? 'white' : 'transparent',
    transition: 'background-color 0.3s, color 0.3s'
  });

  const buttonSuccessStyle = {
    backgroundColor: '#28a745',
    border: 'none',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem'
  };
  
  const buttonInfoStyle = {
    backgroundColor: '#17a2b8',
    border: 'none',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem'
  };

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
            {['Home', 'Quiz', 'Resources', 'Mentor Dashboard'].map((item, index) => (
              <Nav.Link 
                as={Link} 
                to={`/${item.toLowerCase().replace(' ', '')}`} 
                key={index}
                style={navLinkStyle(hovered === item)}
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
              >
                {item}
              </Nav.Link>
            ))}
            {/* <Nav.Link as={Link} to="/result" style={navLinkStyle(hovered === 'Result')} onMouseEnter={() => setHovered('Result')} onMouseLeave={() => setHovered(null)}>Result</Nav.Link> */}
          </Nav>
          <Nav className="ms-auto">
            {/* Custom background colors for each button */}
            <Nav.Link as={Link} to="/signup">
              <button className="btn" style={buttonSuccessStyle}>Sign Up</button>
            </Nav.Link>
            <Nav.Link as={Link} to="/signin">
              <button className="btn" style={buttonInfoStyle}>Sign In</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
