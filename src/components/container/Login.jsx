import React, { useState } from "react";
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const contentStyle = {
  marginTop: '50px',
  textAlign: 'center',
};

const LoginComponent = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailField(event) {
    return setEmail(event.target.value);
  }

  function handlePasswordField(event) {
    return setPassword(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (email === "users1" && password === "1234") {
      alert("Bienvenido")
    } else {
      alert("Vuelva a intentarlo")
    }
  }

  return (
    <div style={contentStyle}>
      <div className="card">
        <h4 className="card-title" style={{marginTop: '10px'}}>Login</h4>
        <div className="card-body">
          <Form id="login">
            <FormGroup controlId="formEmail">
              <FormControl type="email" value={email} onChange={handleEmailField} placeholder="Email"></FormControl>
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" value={password} onChange={handlePasswordField} placeholder="Password"></FormControl>
            </FormGroup>
            <FormGroup controlId="formBtn">
              <Button type="submit" onClick={handleFormSubmit}>Login</Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;