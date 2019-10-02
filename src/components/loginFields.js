import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const divStyle = {
marginLeft: 'auto',
marginRight: 'auto',
width: 200
};

const labelStyle = {
  display: 'block',
textAlign: 'center'
};

const buttonStyle = {
display: 'block',
marginRight: 'auto',
marginLeft: 'auto'
};

class Login extends React.Component {
    render() {
      return <div style={divStyle}>
        <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label style={labelStyle}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" /> 
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label style={labelStyle}>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      <Button style={buttonStyle} variant="outline-info" type="submit">
        <a href="../dashboard/dashboard.jsß">Login</a>
      </Button>
    </Form>
    </div>
    }
  }

  export default Login;