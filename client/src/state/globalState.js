//code from https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/
// and https://www.freecodecamp.org/news/state-management-with-react-hooks/ as I try different ways to implement
//context hook

import React, {createContext, useReducer} from 'react';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    favorites: [],
    avatar: "",
    points: 0,
    maleCloset: [],
    femaleCloset: [],
    aboutMe: ""
};
const globalState = createContext(initialState);
const { Provider } = globalState;

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'login':
                localStorage.setItem("user", action.payload.user);
                localStorage.setItem("token", JSON.stringify(action.payload.token));
                localStorage.setItem("points", action.payload.points);
                localStorage.setItem("favorites", action.payload.favorites);
                localStorage.setItem("avatar", action.payload.avatar);
                localStorage.setItem("maleCloset", action.payload.maleCloset);
                localStorage.setItem("femaleCloset", action.payload.femaleCloset);
                localStorage.setItem("aboutMe", action.payload.aboutMe);

                
                console.log("Logged In!");
                return {
                    ...state,
                    isAuthenticated: true,
                    user: action.payload.user,
                    token: action.payload.token,
                    points: action.payload.points,
                    favorites: action.payload.favorites,
                    avatar: action.payload.avatar,
                    maleCloset: action.payload.maleCloset,
                    femaleCloset: action.payload.femaleCloset,
                    aboutMe: action.payload.aboutMe
                    
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
                    femaleCloset: [],
                    aboutMe:""
                };
            case 'update_points':
                localStorage.setItem("points", action.payload.points);
                return {
                    ...state,
                    points: action.payload.points
                };
            case 'update_favorites':
                localStorage.setItem("favorites", action.payload.favorites);
                return {
                    ...state,
                    favorites: action.payload.favorites
                };
            case 'update_avatar':
                localStorage.setItem("avatar", action.payload.avatar);
                return {
                    ...state,
                    avatar: action.payload.avatar
                };
            case 'update_male_closet':
                localStorage.setItem("maleCloset", action.payload.avatar);
                return {
                    ...state,
                    maleCloset: action.payload.maleCloset
                };
            case 'update_female_closet':
                localStorage.setItem("femaleCloset", action.payload.femaleCloset);
                return {
                    ...state,
                    femaleCloset: action.payload.femaleCloset
                };
                case 'update_aboutMe':
                    localStorage.setItem("aboutMe", action.payload.aboutMe);
                    return {
                        ...state,
                        aboutMe: action.payload.aboutMe
                };
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { globalState, StateProvider }