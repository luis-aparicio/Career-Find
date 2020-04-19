import React, { Fragment } from 'react';
import logo from '../../assets/logo.svg';
import './avtr.css';
import arrow from './icon.png'
import arrow2 from './icon2.png'
import { Link } from 'react-router-dom';


function EditAvatar() {
    return (
        <Fragment>
        <div className="App">
            <header className="App-header"></header>
        </div>
        <div className="conteditav">
            <div className="avtrcol1">
    <div className="editavtrrow">
    <img src={arrow2} className="arrowimg" height="80" width="100"></img>
    <div className="box1"></div>
    <img src={arrow} className="arrowimg" height="80" width="100"></img>
    </div>
    <div className="editavtrrow">
    <img src={arrow2} className="arrowimg" height="80" width="100"></img>
    <div className="box2"></div>
    <img src={arrow} className="arrowimg" height="80" width="100"></img>
    </div>
    <div className="editavtrrow">
    <img src={arrow2} className="arrowimg" height="80" width="100"></img>
    <div className="box3"></div>
    <img src={arrow} className="arrowimg" height="80" width="100"></img>
    </div>
    </div>
    <div className="avtrcol2">
        <h1 className="avtrheading">Edit Avatar</h1>
        <button name="save" className="avtrsave">Save</button>
        <button name="cancel" className="avtrsave">Cancel</button>
    </div>
</div>
</Fragment>
    );
}

export default EditAvatar;
