import React from "react";
import { globalState } from "../../state/globalState";
import axios from 'axios';
import { useContext } from "react";

 const updateBackEnd = (property, content) => {

        const globalStateVars = React.useContext(globalState);

        //calls update post to change user attribute
        //will work for any property of UserModel
        let data = {
            username: globalStateVars.state.user,
            property: property,
            content: content
        };

        let response = axios.post('/api/user/profile/update', data);
        if(!response.includes('ERROR')){
            
            console.log(property + ' = ' + content);
        }else{
            console.log('Error updating' + property);
        }
        return response;
    };

export default updateBackEnd;