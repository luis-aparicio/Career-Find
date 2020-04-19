import React, {useState} from "react";
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import {globalState} from '../../state/globalState'
//import jwt_decode from 'jwt-decode';
import jwt from 'jsonwebtoken'



const LoginForm = (props) => {
    const [formLoginInput, setFormLoginInput] = useState({});
    const[errorString, setErrorString] = useState("");
    const globalStateLogin = React.useContext(globalState);
    const { dispatch } = globalStateLogin;

    //Change made by Moise 
    const [user, setUser] = useState({id:"", name:"", status:""});
    const [isAuth, setAuth] = useState(false);


    const setAuthToken = token =>{
        if(token){
            setAuth(true);
            axios.defaults.headers.common["Authorization"] = token;
        }
        else{
            delete axios.defaults.headers.common["Authorization"];
        }
    }


    const handleLoginSubmit = async(event) => {
        event.preventDefault();
        let userInfo = {
            username: formLoginInput.username,
            password: formLoginInput.password
        };
        await axios.post('/api/user/:login', userInfo).then((response) => {
            //console.log(response.data);
            if(response.data !== true){
                setErrorString(response.data);
                dispatch({ type: 'logout' })
            } else {
               // console.log("Success!");
                //const userUrl = '/user/' + formInput.username + '/';
                const {token} = response.data.token;
                console.log(token);
                localStorage.setItem("jwtToken", JSON.stringify(token));
                setAuthToken(token);
                const dcdToken = jwt.decode(token);
                setUser(dcdToken);

                dispatch({
                    type:'login', 
                    payload: {
                        username: formLoginInput.username,
                        //setUser(dcdToken) 
                    }
                    
                });
            }
        });

       
    };

    const getAuth = () =>{
        if(isAuth === true){
            return true;
        }
        else{
            return false;
        }
    }

    const logout =()=>{
        //destroying the token after logout
        localStorage.removeItem("jwtToken");
        setAuth(false);
        setAuthToken(false);
        dispatch(setUser({}));
    }


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
                        <Form.Label className="lab">Username:</Form.Label>
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
                        <Form.Label className="lab">Password:</Form.Label>
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
                        size="lg"
                        className="center1">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
    return null;
};

export default LoginForm;