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
        let response = await axios.post('/api/user/', user);
        
        if(response.data !=="Success"){
            setErrorString(response.data);
            dispatch({ type: 'logout' })
            console.log("error");
        } else {
            console.log("Success!");
            await axios.post('/api/user/:login', user).then((response) => {
                console.log("Response: ");
                console.log(response.data);
                console.log("end response");
                const token = response.data.token;
                console.log(token);
    
                if(response.data.message !=="Success" || !token){
                    delete axios.defaults.headers.common["Authorization"];
                    setErrorString(response.data);
                    dispatch({ type: 'logout' })
                } else {
                    axios.defaults.headers.common["Authorization"] = token;
                    dispatch({ 
                        type:'login', 
                        payload: {
                            user: formInput.firstname,
                            token: response.data.token
                        }
                        });
                }
                
                //const userUrl = '/user/' + formInput.username + '/';
                //dispatch({ type:'login', payload:formInput.username });
            });
        }
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
                            <Form.Label className="lab">Username:</Form.Label>
                            <Form.Control
                                name="username"
                                type="text"
                                placeholder="Enter username"/>
                            <Form.Control.Feedback type="invalid">
                                That username is taken please choose another.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formRegisterUserEmail">
                            <Form.Label className="lab">Email:</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter email"/>
                            <Form.Control.Feedback type="invalid">
                                That email is taken please choose another or select login.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formRegisterUserPassword">
                            <Form.Label className="lab">Enter Password:</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Enter password"/>
                        </Form.Group>
                        <Form.Group controlId="formRegisterUserValidPass">
                            <Form.Label className="lab">Confirm Password</Form.Label>
                            <Form.Control
                                name="confirm"
                                type="password"
                                placeholder="Confirm password"/>
                        </Form.Group>
                        <Form.Group controlId="formRegisterUserFirst">
                            <Form.Label className="lab">First Name:</Form.Label>
                            <Form.Control
                                name="firstname"
                                type="text"
                                placeholder="Enter first name"/>
                        </Form.Group>
                        <Form.Group controlId="formRegisterUserLast">
                            <Form.Label className="lab">Last Name:</Form.Label>
                            <Form.Control
                                name="lastname"
                                type="text"
                                placeholder="Enter last name"/>
                        </Form.Group>
                        <Button
                            type="submit"
                            variant="success"
                            size="lg" className="center1">
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