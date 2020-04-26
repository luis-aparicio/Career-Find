//code from https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/
// and https://www.freecodecamp.org/news/state-management-with-react-hooks/ as I try different ways to implement
//context hook
import axios from 'axios';

import React, {createContext, useReducer} from 'react';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    favorites: [],
    avatar: "",
    points: 0,
    maleCloset: [],
    femaleCloset: []
};
const globalState = createContext(initialState);
const { Provider } = globalState;

async function updateBackEnd(property, content) {
    //calls update post to change user attribute
    //will work for any property of UserModel
    let data = {
        username:localStorage.getItem("user"),
        property: property,
        content: content
    };

    let response = await axios.post('/api/user/profile/update', data);
    if(!response.includes('ERROR')){
        localStorage.setItem(property, content);
        console.log(property + ' = ' + content);
    }else{
        console.log('Error updating' + property);
    }

}

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(async(state, action) => {
        switch(action.type) {
            case 'login':
                localStorage.setItem("user", action.payload.user);
                localStorage.setItem("token", JSON.stringify(action.payload.token));
                localStorage.setItem("points", action.payload.points);
                localStorage.setItem("avatar", action.payload.avatar);
                localStorage.setItem("favorites", action.payload.favorites)
                console.log("Logged In!");
                return {
                    ...state,
                    isAuthenticated: true,
                    user: action.payload.user,
                    token: action.payload.token,
                    points: action.payload.points,
                    avatar: action.payload.avatar,
                    favorites: action.payload.favorites
                };
            case 'logout':
                localStorage.clear();
                return {
                    ...state,
                    isAuthenticated: false,
                    token:null,
                    user: null,
                    favorites: [],
                    avatar: "",
                    points: 0,
                    maleCloset: [],
                    femaleCloset: []
                };
            case 'update':
                //calls update post to change user attribute
                //will work for any property of UserModel
                let data = {
                    username:localStorage.getItem("user"),
                    property: action.payload.property,
                    content: action.payload.content
                };
                
                let response = await axios.post('/api/user/profile/update', data);
                if(!response.includes('ERROR')){
                    localStorage.setItem(action.payload.property, action.payload.content);
                    console.log(action.payload.property + ' = ' + action.payload.content);
                }else{
                    console.log('Error updating' + action.payload.property);
                }
                return {
                    ...state,
                    [action.payload.property]: action.payload.content
                };
            default:
                return state;
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { globalState, StateProvider }