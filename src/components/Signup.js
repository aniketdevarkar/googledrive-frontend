import React from "react";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";

import { Form, Button, Card, Alert } from "react-bootstrap";
function Signup() {
  return (
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {{
            /*error*/
          } && <Alert variant="danger">{/*error*/}</Alert>}
          <Form /*onSubmit={handleSubmit}*/>
            <Form.Group id="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" /*ref={emailRef}*/ required />
            </Form.Group>
            <Form.Group id="LastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" /*ref={emailRef}*/ required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" /*ref={emailRef}*/ required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" /*ref={passwordRef}*/ required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                /*ref={passwordConfirmRef}*/ required
              />
            </Form.Group>
            <Button /*disabled={loading}*/ className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </CenteredContainer>
  );
}

export default Signup;
