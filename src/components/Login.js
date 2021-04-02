import React from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import { Form, Button, Card, Alert } from "react-bootstrap";

import "./login.css";
function Login() {
  return (
    <>
      {/* <div className="image">
        <img src={google} />
        <span>GOOGLE DRIVE</span>
      </div> */}
      <CenteredContainer>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {{
              /*error*/
            } && <Alert variant="danger">{/*error*/}</Alert>}
            <Form /*onSubmit={handleSubmit}*/>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" /*ref={emailRef}*/ required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" /*ref={passwordRef}*/ required />
              </Form.Group>
              <Button /*disabled={loading}*/ className="w-100" type="submit">
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </CenteredContainer>
    </>
  );
}

export default Login;

// <div>
//   <Form>
//     <Form.Group controlId="formBasicEmail">
//       <Form.Label>Email address</Form.Label>
//       <Form.Control type="email" placeholder="Enter email" />
//     </Form.Group>

//     <Form.Group controlId="formBasicPassword">
//       <Form.Label>Password</Form.Label>
//       <Form.Control type="password" placeholder="Password" />
//     </Form.Group>

//     <Button variant="primary" type="submit">
//       Submit
//     </Button>
//   </Form>
// </div>
