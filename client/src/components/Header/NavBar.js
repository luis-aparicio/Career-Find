import React from 'react';
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
    let avatarHeadString = globalStateLogin.state.avatarHead;
    console.log(avatarHeadString);

    React.useEffect(() => {
        loggedIn = globalStateLogin.state.isAuthenticated;
    });
    

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
