import React from 'react';
import Button from 'react-bootstrap/Button'
import './login.css'
function Login() {
    return (
        <div class = "buttons">
            <Button variant="primary" size="lg" block>
                Teacher adasdaj
            </Button>
            <Button variant="secondary" size="lg" block>
                Student
            </Button>
        </div>
    );
}

export default Login;
