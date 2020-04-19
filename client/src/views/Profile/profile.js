import React, { Fragment } from 'react';
import logo from '../../assets/logo.svg';
import './prof.css';
import hum from './human.jpg'


function Profile() {
    return (
        <Fragment>
        <div className="App">
            <header className="App-header"></header>
        </div>
        <div className="contain">
<div className="column1">
    <div classname="avatar">
        <center><h1 className="heading">Avatar</h1></center>
        <img src={hum} className="profimg" height="450" width="600">
        </img>
       
    </div>
    <button name="edit" className="editbtn">Edit Profile</button>
</div>
<div className="column2">
<h3 className="username">Jose Bautista</h3>
<h3 className="subheading">Preferred courses</h3>
<ul className="bullet">
    <li>Operating system</li>
    <li>Software Engineering</li>
    <li>Web design</li>
</ul>
<h3 className="subheading">About you</h3>
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
