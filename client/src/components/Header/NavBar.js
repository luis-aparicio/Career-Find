import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { globalState } from "../../state/globalState";
import logo from '../../assets/logo.png'

//taken out for  now:
                /*<Link className = "nav-link" to='/Chat'>Chat</Link>*/

const NavBar = () => {
    /*check context to see if user is loggedin*/
    const globalStateLogin = React.useContext(globalState);
    let loggedIn = globalStateLogin.state.isAuthenticated;
    let avatarHeadString = "https://preview.bitmoji.com/avatar-builder-v3/preview/head?scale=3&gender=1&style=5&rotation=0&hair=2290&hat=-1&mouth=2337&nose=1435&beard=-1&cheek_details=-1&ear=1424&eye=1610&eyelash=-1&eye_details=-1&face_lines=-1&glasses=-1&beard_tone=0&brow_tone=0&eyeshadow_tone=-1&hair_tone=2039326&lipstick_tone=-1&pupil_tone=5977116&skin_tone=12159077&body=0&face_proportion=1&brow=1537&outfit=1018506";

    React.useEffect(() => {
        loggedIn = globalStateLogin.state.isAuthenticated;
    });
    
    if (globalStateLogin.state.isAuthenticated)
    {
        avatarHeadString = globalStateLogin.state.avatarHead;
    }

    return (
        <div className = "header"> 
            {/* Logo */}
            <Link className = "nav-title" to="/">
                <img className = "nav-logo" src={logo} alt="React logo" />
            </Link>

            {/* Page Links */}
            <div className = "nav-items">
                <Link className = "nav-link" to='/Home'>Home</Link>
                <Link className = "nav-link" to='/Careers'>Careers</Link>
                <Link className = "nav-link" visibility={globalStateLogin.state.isAdmin ? 'visible' : 'hidden'} to='/Classroom'>Admin</Link>
                <Link className = "nav-link" to='/Profile'>Profile</Link>
                <Link className = "nav-link" to={loggedIn ? '/Rewards' : '/Login'}>Rewards</Link>
                <Link className = "nav-link" to= '/Login'>
                    { loggedIn ? 'Logout ' + globalStateLogin.state.user : 'Login/Register'}
                </Link>
                {/*<a className = "nav-link" target="_blank" rel="noopener norefferer" href="https://nodejs.org/en/docs/">*To Link*</a>*/}
               
                
                
                <img src={avatarHeadString} height="100" width="100">
                </img>

                
            </div>
           

        </div>
    )
};

export default NavBar;
