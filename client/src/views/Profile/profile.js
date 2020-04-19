import React, { Fragment } from 'react';
import logo from '../../assets/logo.svg';
import './prof.css';
import hum from './human.jpg'
import { Link } from 'react-router-dom';


function Profile() {
    return (
        <Fragment>
        <div className="App">
            <header className="App-header"></header>
        </div>
        <div className="cont">
<div className="col1">
    <div classname="avatar">
        <center><h1 className="headig">Avatar</h1></center>
        <img src={hum} className="profimg" height="450" width="600">
        </img>
       
    </div>
    <Link className="editbtn" to='/Home'>Edit Profile</Link>
    <Link className="editbtn" to='/EditAvatar'>Edit Avatar</Link>
</div>
<div className="col2">
<h3 className="username">Jose Bautista</h3>
<h3 className="subheadig">Preferred Career</h3>
<ul className="bullet">
    <li>Operating system</li>
    <li>Software Engineering</li>
    <li>Web design</li>
</ul>
<h3 className="subheadig">Preferred courses</h3>
<ul className="bullet">
    <li>Operating system</li>
    <li>Software Engineering</li>
    <li>Web design</li>
</ul>
<h3 className="subheadig">About you</h3>
<p className="desc">
lorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem 
Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsum
lorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsum
lorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsum
lorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsum
</p>
</div>
        </div></Fragment>
    );
}

export default Profile;
