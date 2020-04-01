import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

const Banner = () => {
    return (
 
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 728 40">
            <g id="content" className="banner">
                <rect id="backgr" y="0" className="st1" width="728" height="60"/>
                <polygon id="tri2" className="st2" points="0.11,59.91 66.73,59.83 0,9.95 	"/>
                <polygon id="tri1" className="st2" points="728,59.9 728,9.93 661.38,59.9 	"/>
                <text className="hashtag" x="25%" y="65%" >#careerfind</text>
            </g>
        </svg>
        
    )
};

export default Banner;
