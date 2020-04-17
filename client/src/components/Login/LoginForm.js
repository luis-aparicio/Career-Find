import React, {useState} from "react";
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import {globalState} from '../../state/globalState'



const LoginForm = (props) => {
    const [formLoginInput, setFormLoginInput] = useState({});
    const[errorString, setErrorString] = useState("");
    const globalStateLogin = React.useContext(globalState);
    const { dispatch } = globalStateLogin;


    const handleLoginSubmit = async(event) => {
        event.preventDefault();
        let user = {
            username: formLoginInput.username,
            password: formLoginInput.password
        };
        await axios.post('/api/user/:login', user).then((response) => {
            //console.log(response.data);
            //Issue with the if statement as it will always failed the login 
            //You can see the implemented if statement at the bottom and make change as needed to better it
            
            /*if(response.data == "Success"){
                setErrorString(response.data);
                dispatch({ type: 'logout' })
            } else {
               // console.log("Success!");
                //const userUrl = '/user/' + formInput.username + '/';
                dispatch({ type:'login', payload:formLoginInput.username });
            }*/

            if(response.data == null){
                setErrorString(response.data);
                dispatch({ type: 'logout' })
            } else {
               // console.log("Success!");
                //const userUrl = '/user/' + formInput.username + '/';
                dispatch({ type:'login', payload:formLoginInput.username });
            }
        });
       // console.log(user);

    };

    const handleLoginChange = (event) => {
        event.persist();
        setFormLoginInput(formLoginInput => ({...formLoginInput, [event.target.name]: event.target.value}));
    };

    if(props.returningUser === true) {   //not new user, show login form instead
        return(
            <div>
                <h2>{errorString}</h2>
                <Form onSubmit={handleLoginSubmit} onChange={handleLoginChange}>
                    <Form.Group controlId="formRegisterUserUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            name="username"
                            type="text"
                            placeholder="Enter Username"
                        />
                        <Form.Control.Feedback type="invalid">
                            That user does not exist in our system. Please change the
                            username or click Register
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formRegisterUserPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Enter Password"/>
                        <Form.Control.Feedback type="invalid">
                            Incorrect Password
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                        type="submit"
                        variant="success"
                        size="lg">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
    return null;
};

export default LoginForm;