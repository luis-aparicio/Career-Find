import React, { Fragment } from 'react';
import logo from '../../assets/logo.svg';
import './prof.css';
import hum from './human.jpg'
import { Link } from 'react-router-dom';
import libmoji from 'libmoji';
import {globalState} from '../../state/globalState';
import axios from 'axios';


function Profile() {


let gender = libmoji.genders[libmoji.randInt(2)];
let style = libmoji.styles[libmoji.randInt(3)];
let traits = libmoji.randTraits(libmoji.getTraits(gender[0],style[0]));
let outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0]))));

const globalStateVars = React.useContext(globalState);
const { dispatch } = globalStateVars;



    //const basePreviewUrl = "https://preview.bitmoji.com/avatar-builder-v3/preview/body?scale=3&gender=1&style=5&rotation=0&beard=2212&brow=1555&cheek_details=1356&ear=1423&eye=1614&eyelash=-1&eye_details=1352&face_lines=1366&glasses=2465&hair=1723&hat=2495&jaw=1400&mouth=2338&nose=1482&beard_tone=8678208&blush_tone=16754088&brow_tone=6772090&eyeshadow_tone=-1&hair_tone=8637550&hair_treatment_tone=10513945&lipstick_tone=16740668&pupil_tone=5793385&skin_tone=9657655&body=1&face_proportion=13&eye_spacing=0&eye_size=2&outfit=990491";

    console.log("avatar "+globalStateVars.state.avatar);
    return (
        <Fragment>
        <div className="App">
            <header className="App-header"></header>
        </div>
        <div className="cont">
<div className="col1">
    <div classname="avatar">
        <center><h1 className="headig">Avatar</h1></center>
        <img src={globalStateVars.state.avatar} className="avatarimg" height="450" width="500">
        </img>
       
    </div>
    <Link className="editbtn" to='/Home'>Edit Profile</Link>
    <Link className="editbtn" to='/EditAvatar'>Edit Avatar</Link>
</div>
<div className="col2">
<h3 className="username">Jose Bautista</h3>
<h3 className="subheadig">Preferred Career</h3>
<ul className="bullet">
    {globalStateVars.state.favorites.map(career => 
       <li>{career}</li> 
        )}    
</ul>

<h3 className="subheadig">About you</h3>
<p className="desc">
{globalStateVars.state.aboutMe}
</p>
</div>
        </div></Fragment>
    );
}

export default Profile;
