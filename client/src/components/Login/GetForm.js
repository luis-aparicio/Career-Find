import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import React from "react";

const GetForm = (props) => {
    if(props.newUser === true){
        return(
            < RegisterForm
                newUser = {props.newUser}
                setNewUser = {props.setNewUser}
            />
        );
    } else if(props.returningUser === true) {
        return(
            <LoginForm returningUser={props.returningUser}
                       setReturningUser={props.setReturningUser}
            />
        );
    } else
        return null;
}

export default GetForm;