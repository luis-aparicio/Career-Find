import React, { Fragment } from 'react';
import logo from '../../assets/logo.svg';
import hum from './human.jpg'
import './rew.css';

function Reward() {
    return (
        <Fragment>
        <div className="App">
            <header className="App-header">
            </header>
        </div>
        <div className="avtrcont">
           <center> <h1 className="avtrheadig">List of Available Avatars</h1></center>
            <div className="avatrow">
            <img src={hum} className="avtrimg" height="300" width="300"></img>
            <img src={hum} className="avtrimg" height="300" width="300"></img>
            <img src={hum} className="avtrimg" height="300" width="300"></img>
            <img src={hum} className="avtrimg" height="300" width="300"></img>
            </div>
            <div className="pnts">
                <h3 className="pntshead">Total Points:</h3>
                <h3 className="scorehead">52</h3>
                <button name="purchase"  className="purbtn">Purchase</button>
            </div>
        </div>
    
        </Fragment>
    );
}

export default Reward;
