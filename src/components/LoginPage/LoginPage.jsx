import React, { useState } from 'react';
import { Button, Form, FormControl, FormGroup, TabPane } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../api/users";
import './LoginPage.css';

const LoginPage = () => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    const handleFormSubmit = async e => {
        try {
            await loginUser({userName: userName, password: password});
            history.push('/dashboard');
        } catch (e) {
            console.error('User not found');
        }
        e.preventDefault();
    }

  return (
      <div className="LoginPage">
          <TabPane className='panelStyle divStyle'>
              <Form horizontal className="LoginForm" id="loginForm">
                  <FormGroup controlId="formEmail">
                      <FormControl type="email" placeholder="Email Address" onChange={e => setUserName(e.target.value)}/>
                  </FormGroup>
                  <FormGroup controlId="formPassword">
                      <FormControl type="password" placeholder="Password" id="formPassword" onChange={e => setPassword(e.target.value)}/>
                  </FormGroup>
                  <FormGroup style={{marginBottom: 0}} controlId="formSubmit">
                      <Button bsStyle="primary" type="submit" onClick={handleFormSubmit}>
                          Login
                      </Button>
                  </FormGroup>
              </Form>
          </TabPane>
      </div>

  );
}

export default LoginPage;
