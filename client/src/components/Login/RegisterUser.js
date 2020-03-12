
import React from 'react';
import { Button, Card } from "react-bootstrap";


//I am not consolidating RegisterUser and LoginUser at this point until I get the logic sorted for communicating with server
const RegisterUser = (props) => {

    if(props.newUser === false){
        let buttonText =  "Register";
        if(props.returningUser === true)
            buttonText = "Register Instead";
        else
            buttonText = "Register";

        const handleClick = () => {
            props.setReturningUser(false);
            props.setNewUser(true);
        };

        return(
            <Card>
                    <Button
                    onClick ={handleClick}
                    variant="primary"
                    size="lg">
                    {buttonText}
                    </Button>
            </Card>      
        );
    }
    return null;

};

export default RegisterUser;