import React, {useState} from 'react';
import {Button, Form, FormControl, FormGroup, TabPane} from "react-bootstrap";
import {addUser} from "../../api/users";
import "./register.css";

const RegisterPage = () => {
    const[userName, setUserName] = useState();
    const[password, setPassword] = useState();
    const handleFormSubmit = async () => {
        console.log(await addUser({userName: userName, password: password}));
    }
    return (
        <div className="registerPage">
            <TabPane className='panelStyle registerPosition'>
                <Form horizontal className="registerForm" id="registerForm">
                    <FormGroup controlId="formUserId">
                        <FormControl type="userName" placeholder="Enter Username" onChange={e => setUserName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup controlId="formEmail">
                        <FormControl type="email" placeholder="Enter Email" onChange={e => setUserName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup controlId="formPassword">
                        <FormControl type="password" placeholder="Enter Password" id="formPassword" onChange={e => setPassword(e.target.value)}/>
                    </FormGroup>
                    <FormGroup style={{marginBottom: 0}} controlId="formSubmit">
                        <Button bsStyle="primary" type="submit" onClick={handleFormSubmit}>
                            Register
                        </Button>
                    </FormGroup>
                </Form>
            </TabPane>
        </div>
    );
};

export default RegisterPage;