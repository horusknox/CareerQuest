import React, { useState } from 'react';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const question = "Choose only one from the below options:";
  const options = ["Computer", "Negotiating", "Physics", "Helping People"];
  const correctAnswer = "Helping People"; // Example correct answer for feedback

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    navigate(`/results?choice=${encodeURIComponent(option)}`);
  };

  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center min-vh-100 p-3" style={{ backgroundColor: '#121212' }}>
      <h1 style={{ color: 'white', marginBottom: '2rem' }}>Let's get you a career path🕵️‍♀️</h1>
      <Card style={{ width: '100%', maxWidth: '1000px', backgroundColor: '#1e1e1e', color: 'white' }}>
        <Card.Header as="h3" style={{ backgroundColor: '#333', fontSize: '1.75rem' }}>
          What interests you the most?
        </Card.Header>
        <Card.Body>
          <Card.Title style={{ fontSize: '1.5rem' }}>{question}</Card.Title>
          <ListGroup variant="flush">
            {options.map((option, index) => (
              <ListGroup.Item key={index} className="p-0" style={{ backgroundColor: '#1e1e1e', border: 'none' }}>
                <Button
                  variant="outline-light"
                  className={`w-100 ${selectedOption === option ? 'bg-secondary' : ''}`}
                  style={{ color: 'white', borderColor: '#444', padding: '1.5rem', fontSize: '1.25rem' }}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
        {selectedOption && (
          <Card.Footer className={`text-${selectedOption === correctAnswer ? 'success' : 'danger'}`} style={{ backgroundColor: '#333' }}>
            {selectedOption === correctAnswer ? 'Correct!' : 'Try Again!'}
          </Card.Footer>
        )}
      </Card>
    </Container>
  );
}

export default Quiz;
