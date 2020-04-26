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
            password: formInput.password,
            avatar: "https://preview.bitmoji.com/avatar-builder-v3/preview/body?scale=3&gender=1&style=5&rotation=0&beard=2212&brow=1555&cheek_details=1356&ear=1423&eye=1614&eyelash=-1&eye_details=1352&face_lines=1366&glasses=2465&hair=1723&hat=2495&jaw=1400&mouth=2338&nose=1482&beard_tone=8678208&blush_tone=16754088&brow_tone=6772090&eyeshadow_tone=-1&hair_tone=8637550&hair_treatment_tone=10513945&lipstick_tone=16740668&pupil_tone=5793385&skin_tone=9657655&body=1&face_proportion=13&eye_spacing=0&eye_size=2&outfit=990491"
        };
        let response = await axios.post('/api/user/', user);
        
        if(response.data !=="Success"){
            setErrorString(response.data);
            dispatch({ type: 'logout' })
            console.log("register DB error: " + response.data);
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