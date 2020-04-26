import React, {useState} from "react";
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import {globalState} from '../../state/globalState'

const NewStudent = (props) => {
    if(props.showNew){
        const [formInput, setFormInput] = useState({});
        const[errorString, setErrorString] = useState("");
        const globalStateLogin = React.useContext(globalState);
        const { dispatch } = globalStateLogin;

        const maleCloset = [];
        const femaleCloset = [];

        maleCloset.push(1018506);
        femaleCloset.push(1018485);

        const handleSubmit = async(event) => {
            event.preventDefault();


            let user = {
                    firstName: formInput.firstname,
                    lastName: formInput.lastname,
                    username: formInput.username,
                    email: formInput.email,
                    password: formInput.password,
                    isAdmin: false,
                    maleCloset: maleCloset,
                    femaleCloset: femaleCloset,
                    Avatar: "https://preview.bitmoji.com/avatar-builder-v3/preview/body?scale=3&gender=1&style=5&rotation=0&hair=1305&hat=-1&mouth=2337&nose=1435&beard=-1&cheek_details=-1&ear=1424&eye=1610&eyelash=-1&eye_details=-1&face_lines=-1&glasses=-1&beard_tone=0&brow_tone=0&eyeshadow_tone=-1&hair_tone=2039326&lipstick_tone=-1&pupil_tone=5977116&skin_tone=9655597&body=0&face_proportion=1&brow=1537&outfit=1018506",
                    avatarHead: "https://preview.bitmoji.com/avatar-builder-v3/preview/head?scale=3&gender=1&style=5&rotation=0&hair=1305&hat=-1&mouth=2337&nose=1435&beard=-1&cheek_details=-1&ear=1424&eye=1610&eyelash=-1&eye_details=-1&face_lines=-1&glasses=-1&beard_tone=0&brow_tone=0&eyeshadow_tone=-1&hair_tone=2039326&lipstick_tone=-1&pupil_tone=5977116&skin_tone=9655597&body=0&face_proportion=1&brow=1537&outfit=1018485"
            };
            let admin = {
                adminname=globalStateVars.state.user,
                userinfo = user
            };
            let response = await axios.post('/api/user/admin/new', admin);
            
            if(response.data.includes("ERROR")){
                setErrorString(response.data);
                console.log("register ADMIN DB error: " + response.data);
            } else {
                console.log("Success!");
                dispatch({ 
                    type:'update_students', 
                    payload: {
                        students: response.body
                    }
                });
            }

            console.log(user);
            props.setShowNew(false);

        };

        const handleChange = (event) => {
            event.persist();

            setFormInput(formInput => ({...formInput, [event.target.name]: event.target.value}));
        }
        return (    
            <div>
                <Container>
                    <h2>{errorString}</h2>
                    <Form onSubmit={handleSubmit} onChange={handleChange}>
                        <Form.Group controlId="adminUserUsername">
                            <Form.Label className="lab">Username:</Form.Label>
                            <Form.Control
                                name="username"
                                type="text"
                                placeholder="Enter username"/>
                            <Form.Control.Feedback type="invalid">
                                That username is taken please choose another.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="adminUserEmail">
                            <Form.Label className="lab">Email:</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter email"/>
                            <Form.Control.Feedback type="invalid">
                                That email is taken please choose another or select login.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="adminUserPassword">
                            <Form.Label className="lab">Enter Password:</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Enter password"/>
                        </Form.Group>
                        <Form.Group controlId="adminUserValidPass">
                            <Form.Label className="lab">Confirm Password</Form.Label>
                            <Form.Control
                                name="confirm"
                                type="password"
                                placeholder="Confirm password"/>
                        </Form.Group>
                        <Form.Group controlId="adminUserFirst">
                            <Form.Label className="lab">First Name:</Form.Label>
                            <Form.Control
                                name="firstname"
                                type="text"
                                placeholder="Enter first name"/>
                        </Form.Group>
                        <Form.Group controlId="adminUserLast">
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
    }else
        return null;
};

export default NewStudent;