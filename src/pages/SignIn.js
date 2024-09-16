import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CareerQuestLogo from '../components/CareerQuestLogo.jpg';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Add useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-in logic here
    console.log('Sign In:', { email, password, rememberMe });
    navigate('/Quiz'); // Navigate to the /Quiz page on successful sign-in
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-light">
      <Container className="form-container d-flex flex-column align-items-center">
        <img
          className="mb-4"
          src={CareerQuestLogo}
          alt="Career Quest Logo"
          width="300"
          height="300"
        />
        <main className="form-signin mx-auto" style={{ maxWidth: '500px', width: '100%' }}>
          <Form onSubmit={handleSubmit} className="bg-dark p-4 rounded">
            <h1 className="h3 mb-3 fw-normal text-light">Please enter details and sign in ✨</h1>

            <Form.Group className="form mb-3">
              <Form.Label className="text-light">Email address</Form.Label>
              <Form.Control
                type="email"
                id="floatingInput"
                placeholder="Email@address.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary text-light border-0"
              />
            </Form.Group>

            <Form.Group className="form mb-3">
              <Form.Label htmlFor="floatingPassword" className="text-light">Password</Form.Label>
              <Form.Control
                type="password"
                id="floatingPassword"
                placeholder="........"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-secondary text-light border-0"
              />
            </Form.Group>

            <Form.Check
              type="checkbox"
              id="flexCheckDefault"
              label="Remember me"
              className="text-light my-3"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />

            <Button className="btn btn-primary w-100 py-2" type="submit">Sign in</Button>
            <p className="mt-5 mb-3 text-body-secondary text-light">© 2017–2024</p>
            <p className="mt-3 text-center text-light">
              Don't have an account? <Link to="/signup" className="text-info">Sign Up</Link>
            </p>
          </Form>
        </main>
      </Container>
    </div>
  );
}

export default SignInForm;
