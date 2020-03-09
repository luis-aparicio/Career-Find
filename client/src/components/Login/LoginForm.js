import React from "react";
import {Button, Form, FormControl, FormGroup} from "react-bootstrap";


const LoginForm = (props) => {

    if(props.newUser === true) {
        const handleSubmit = event => {
            //CHANGE THIS to send info to backend to validate
            props.setNewUser(false);
            //SET LOGGED IN STATE FOR APP HERE
        };

        return (
            <div>
                <Form>
                    <FormGroup controlId="formRegisterUserUsername">
                        <Form.Label>Username:</Form.Label>
                        <FormControl type="text" placeholder="Enter username"/>
                        <FormControl.Feedback type="invalid">
                            That username is taken please choose another.
                        </FormControl.Feedback>
                    </FormGroup>
                    <FormGroup controlId="formRegisterUserPassword">
                        <Form.Label>Enter Password:</Form.Label>
                        <FormControl type="password" placeholder="Enter username"/>
                    </FormGroup>
                    <FormGroup controlId="formRegisterUserValidPass">
                        <Form.Label>Confirm Password</Form.Label>
                        <FormControl type="password" placeholder="Enter username"/>
                    </FormGroup>
                    <FormGroup controlId="formRegisterUserFirst">
                        <Form.Label>First Name:</Form.Label>
                        <FormControl type="text" placeholder="Enter first name"/>
                    </FormGroup>
                    <FormGroup controlId="formRegisterUserLast">
                        <Form.Label>Last Name:</Form.Label>
                        <FormControl type="text" placeholder="Enter last name"/>
                    </FormGroup>
                </Form>
                <Button onClick={handleSubmit} variant="success" size="lg">
                    Submit
                </Button>
            </div>
        );
    }

    if(props.returningUser === true) {   //not new user, show login form instead
        const handleSubmit = event => {
            //CHANGE THIS to send info to backend to validate
            props.setReturningUser(false);
            //SET LOGGED IN STATE FOR APP HERE
        };
        return(
            <div>
                <Form>
                    <FormGroup controlId="formRegisterUserUsername">
                        <Form.Label>Username:</Form.Label>
                        <FormControl type="text" placeholder="Enter Username"/>
                        <FormControl.Feedback type="invalid">
                            That user does not exist in our system. Please change the
                            username or click Register
                        </FormControl.Feedback>
                    </FormGroup>
                    <FormGroup controlId="formRegisterUserPassword">
                        <Form.Label>Password:</Form.Label>
                        <FormControl type="password" placeholder="Enter Password"/>
                        <FormControl.Feedback type="invalid">
                            Incorrect Password
                        </FormControl.Feedback>
                    </FormGroup>
                </Form>
                <Button onClick = {handleSubmit} variant = "success" size = "lg">
                    Submit
                </Button>
            </div>
        );
    }
    return <div><h2>{props.returningUser}</h2>
    </div>;
};

export default LoginForm;