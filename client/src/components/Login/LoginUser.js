import React from 'react';
import {Button} from "react-bootstrap";

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
                size="lg" block>
                {buttonText}
            </Button>
        );
    }
    return null;

};

export default LoginUser;