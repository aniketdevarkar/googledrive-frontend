import React from "react";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import { Form, Button, Card, Alert } from "react-bootstrap";
function ForgotPassword() {
  return (
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {{
            /*error*/
          } && <Alert variant="danger">{/*error*/}</Alert>}
          {{
            /*message*/
          } && <Alert variant="success">{/*message*/}</Alert>}
          <Form /*onSubmit={handleSubmit}*/>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" /*ref={emailRef}*/ required />
            </Form.Group>
            <Button /*disabled={loading}*/ className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </CenteredContainer>
  );
}

export default ForgotPassword;
