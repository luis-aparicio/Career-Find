
import React, {useState, useContext} from 'react';
import RegisterUser from '../../components/Login/RegisterUser.js';
import LoginUser from '../../components/Login/LoginUser.js';
import LoginForm from '../../components/Login/LoginForm.js';
import { Container, Button } from 'react-bootstrap';
import './login.css';
import {globalState} from "../../state/globalState";


function Login() {
    const [newUser, setNewUser] = useState(false);
    const [returningUser, setReturningUser] = useState(false);
    const globalStateLogin = useContext(globalState);
    const { dispatch } = globalStateLogin;
    let loggedIn = globalStateLogin.state.isAuthenticated;

    const handleClick = async (event) => {
        await dispatch({ type:'logout' });
        loggedIn = globalStateLogin.state.isAuthenticated;
    }

    if(loggedIn){
        return(
            <div>
                <Container>
                    <Button
                        onClick={handleClick}
                        variant="primary"
                        size="lg">
                        Logout
                    </Button>
                </Container>
            </div>
        );
    } else {
        return (
            <div>
                <Container>
                    <RegisterUser newUser={newUser}
                                  setNewUser={setNewUser}
                                  returningUser={returningUser}
                                  setReturningUser={setReturningUser}
                    />
                    <LoginUser returningUser={returningUser}
                               setReturningUser={setReturningUser}
                               newUser={newUser}
                               setNewUser={setNewUser}
                    />
                    <LoginForm newUser={newUser}
                               setNewUser={setNewUser}
                               returningUser={returningUser}
                               setReturningUser={setReturningUser}
                    />
                </Container>
            </div>
        );
    }
}

export default Login;
