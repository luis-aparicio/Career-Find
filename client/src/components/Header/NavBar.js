import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className = "header">
            {/* Logo */}
            <Link className = "nav-title" to="/">
                <img className = "nav-logo" src={ "/logo192.png" } alt="React logo" />
            </Link>

            {/* Page Links */}
            <div className = "nav-items">
                <Link className = "nav-link" to='/Home'>Home</Link>
                <Link className = "nav-link" to='/Careers'>Careers</Link>
                <Link className = "nav-link" to='/Classroom'>Classroom</Link>
                <Link className = "nav-link" to='/Profile'>Profile</Link>
                <Link className = "nav-link" to='/Rewards'>Rewards</Link>
                <Link className = "nav-link" to='/Chat'>Chat</Link>
                <Link className = "nav-link" to='/Login'>Login/Register</Link>
                {/*<a className = "nav-link" target="_blank" rel="noopener norefferer" href="https://nodejs.org/en/docs/">*To Link*</a>*/}
            </div>

        </div>
    )
};

export default NavBar;
