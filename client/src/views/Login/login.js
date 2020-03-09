
import React, {useState, useEffect} from 'react';
import RegisterUser from '../../components/Login/RegisterUser.js';
import LoginUser from '../../components/Login/LoginUser.js';
import LoginForm from '../../components/Login/LoginForm.js';

import './login.css'
function Login() {
    const [newUser, setNewUser] = useState(false);
    const [returningUser, setReturningUser] = useState(false);

    return (
        <div>
            <LoginForm newUser = {newUser}
                       setNewUser = {setNewUser}
                       returningUser = {returningUser}
                       setReturningUser = {setReturningUser}
            />
            <RegisterUser newUser = {newUser}
                          setNewUser = {setNewUser}
                          returningUser = {returningUser}
                          setReturningUser = {setReturningUser}
            />
            <LoginUser returningUser = {returningUser}
                       setReturningUser = {setReturningUser}
                       newUser = {newUser}
                       setNewUser = {setNewUser}
            />
        </div>
    );
}

export default Login;
