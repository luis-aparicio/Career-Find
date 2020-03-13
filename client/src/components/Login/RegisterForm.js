import React, {useState} from "react";
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import {globalState} from '../../state/globalState'



const RegisterForm = (props) => {
    const [formInput, setFormInput] = useState({});
    const[errorString, setErrorString] = useState("");
    const globalStateLogin = React.useContext(globalState);
    const { dispatch } = globalStateLogin;

    const handleSubmit = async(event) => {
        event.preventDefault();
        let user = {
            firstName: formInput.firstname,
            lastName: formInput.lastname,
            username: formInput.username,
            email: formInput.email,
            password: formInput.password
        };
        await axios.post('/api/user/', user).then((response) => {
            if(response.data !=="Success"){
                setErrorString(response.data);
                dispatch({ type: 'logout' })
            } else {
                console.log("Success!");
                //const userUrl = '/user/' + formInput.username + '/';
                dispatch({ type:'login', payload:formInput.username });
            }
        });
        console.log(user);

    };

    const handleChange = (event) => {
        event.persist();
        setFormInput(formInput => ({...formInput, [event.target.name]: event.target.value}));
    }

    if(props.newUser === true) {

        return (
            <div>
                <Container>
                    <h2>{errorString}</h2>
                    <Form onSubmit={handleSubmit} onChange={handleChange}>
                        <Form.Group controlId="formRegisterUserUsername">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control
                                name="username"
                                type="text"
                                placeholder="Enter username"/>
                            <Form.Control.Feedback type="invalid">
                                That username is taken please choose another.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formRegisterUserEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter email"/>
                            <Form.Control.Feedback type="invalid">
                                That email is taken please choose another or select login.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formRegisterUserPassword">
                            <Form.Label>Enter Password:</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Enter username"/>
                        </Form.Group>
                        <Form.Group controlId="formRegisterUserValidPass">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                name="confirm"
                                type="password"
                                placeholder="Enter username"/>
                        </Form.Group>
                        <Form.Group controlId="formRegisterUserFirst">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control
                                name="firstname"
                                type="text"
                                placeholder="Enter first name"/>
                        </Form.Group>
                        <Form.Group controlId="formRegisterUserLast">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control
                                name="lastname"
                                type="text"
                                placeholder="Enter last name"/>
                        </Form.Group>
                        <Button
                            type="submit"
                            variant="success"
                            size="lg">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }
    return null;
};

export default RegisterForm;