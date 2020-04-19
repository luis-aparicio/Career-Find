import React from 'react';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import './loginstyling.css';

const LoginUser = (props) => {
    if(props.returningUser === false){
        let buttonText =  "Login";
        if(props.newUser === true)
            buttonText = "Login Instead";
        else
            buttonText = "Login";

        const handleClick = () => {
            props.setReturningUser(true);
            props.setNewUser(false);
        };

        return(
            
                    <Button
                    onClick ={handleClick}
                    variant="primary"
                    size="lg" className="loginbtn">
                    {buttonText}
                    </Button>
             
        );
    }
    return null;

};

export default LoginUser;