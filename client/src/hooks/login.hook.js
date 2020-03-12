//Custom hook to change state of context
//code found and changed from https://medium.com/@cosmvs/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d
//There are many, many ways to implement context hook so I am trying a method from this site

//We can other global states change functions here if needed in the future
//WE could change the name to not be specific to user and make the state store an object
//this would be good for changing theme based on career cluster selection

import React from 'react';
import {LoginContext} from '../state/globalState';

export const useLogin = (): LoginContext => {
    const [login, setLogin] = React.useState('');

    const setCurrentLogin = React.useCallback((currentLogin: string): void => {
        setLogin(currentLogin);
    }, []);

    return {
        login,
        setCurrentLogin,
    };
};