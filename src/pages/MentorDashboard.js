import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';

const MentorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container fluid style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <Row>
        <Col md={3} className="mb-4">
          <Card bg="dark" text="light">
            <Card.Header>Mentor Dashboard</Card.Header>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link 
                  href="#overview" 
                  style={{ color: 'white' }}
                  active={activeTab === 'overview'}
                  onClick={() => handleSelectTab('overview')}
                >
                  Overview
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  href="#students" 
                  style={{ color: 'white' }}
                  active={activeTab === 'students'}
                  onClick={() => handleSelectTab('students')}
                >
                  Students
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  href="#sessions" 
                  style={{ color: 'white' }}
                  active={activeTab === 'sessions'}
                  onClick={() => handleSelectTab('sessions')}
                >
                  Sessions
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  href="#settings" 
                  style={{ color: 'white' }}
                  active={activeTab === 'settings'}
                  onClick={() => handleSelectTab('settings')}
                >
                  Settings
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card>
        </Col>
        <Col md={9}>
          <Card bg="dark" text="light">
            <Card.Header>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</Card.Header>
            <Card.Body>
              {activeTab === 'overview' && (
                <>
                  <Row>
                    <Col>
                      <Card bg="secondary" text="white" className="mb-3">
                        <Card.Body>
                          <Card.Title>Active Sessions</Card.Title>
                          <Card.Text>10</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card bg="secondary" text="white" className="mb-3">
                        <Card.Body>
                          <Card.Title>Students</Card.Title>
                          <Card.Text>25</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Button variant="primary">Add New Session</Button>
                </>
              )}
              {activeTab === 'students' && (
                <Card bg="secondary" text="white" className="mb-3">
                  <Card.Body>
                    <Card.Title>Student List</Card.Title>
                    <Card.Text>
                      <ul style={{
                        listStyleType: 'none',
                        padding: '10px',
                        border: '1px solid #444',
                        borderRadius: '8px',
                        backgroundColor: '#1e1e1e'
                      }}>
                        <li style={{ padding: '5px', borderBottom: '1px solid #444' }}>John Doe - 3rd Year</li>
                        <li style={{ padding: '5px', borderBottom: '1px solid #444' }}>Jane Smith - 2nd Year</li>
                        <li style={{ padding: '5px' }}>Michael Johnson - 4th Year</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              )}
              {activeTab === 'sessions' && (
                <Card bg="secondary" text="white" className="mb-3">
                  <Card.Body>
                    <Card.Title>Session Schedule</Card.Title>
                    <Card.Text>
                      <ul style={{
                        listStyleType: 'none',
                        padding: '10px',
                        border: '1px solid #444',
                        borderRadius: '8px',
                        backgroundColor: '#1e1e1e'
                      }}>
                        <li style={{ padding: '5px', borderBottom: '1px solid #444' }}>Session 1 - 10/01/2024 - 10:00 AM</li>
                        <li style={{ padding: '5px', borderBottom: '1px solid #444' }}>Session 2 - 10/05/2024 - 2:00 PM</li>
                        <li style={{ padding: '5px' }}>Session 3 - 10/10/2024 - 11:00 AM</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              )}
              {activeTab === 'settings' && (
                <Card bg="secondary" text="white" className="mb-3">
                  <Card.Body>
                    <Card.Title>Settings</Card.Title>
                    <Card.Text>
                      <ul style={{
                        listStyleType: 'none',
                        padding: '10px',
                        border: '1px solid #444',
                        borderRadius: '8px',
                        backgroundColor: '#1e1e1e'
                      }}>
                        <li style={{ padding: '5px', borderBottom: '1px solid #444' }}>Account: Update details and password</li>
                        <li style={{ padding: '5px', borderBottom: '1px solid #444' }}>Notifications: Set preferences for alerts</li>
                        <li style={{ padding: '5px' }}>Privacy: Manage your privacy settings</li>
                      </ul>
                    </Card.Text>
                    <Button variant="warning">Save Changes</Button>
                  </Card.Body>
                </Card>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MentorDashboard;
