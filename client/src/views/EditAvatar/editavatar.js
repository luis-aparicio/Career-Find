import React, { Fragment, useState } from 'react';
import logo from '../../assets/logo.svg';
import './avtr.css';
import arrow from './icon.png';
import arrow2 from './icon2.png';
import Button from 'react-bootstrap/Button';
import libmoji from 'libmoji';
import Dropdown from 'react-bootstrap/Dropdown';
import {globalState} from '../../state/globalState';
import axios from 'axios';
     
        
function EditAvatar() {

    const globalStateVars = React.useContext(globalState);
    const { dispatch } = globalStateVars;


    const defaulttraits = libmoji.getTraits("male","cm");
    const genders = [["male",1],["female",2]];
    const poses = ["fashion","head","body"];
    const malebrands = libmoji.getBrands("male");
    const femalebrands = libmoji.getBrands("female");
    
    const styles = [["bitstrips",1],['bitmoji',4],["cm",5]];

    const [selectedoutfit,setSelectedoutfit] = useState(0);
    const [selectedgender,setSelectedgender] = useState(0);
    const [currenttrait,setCurrenttrait] = useState(defaulttraits);
    
    const [selectedbrow,setSelectedbrow] = useState(0);
    const [selectedcheek,setSelectedcheek] = useState(0);
    const [selectedear,setSelectedear] = useState(0);
    const [selectedeyelash,setSelectedeyelash] = useState(0);
    const [selectedbeard,setSelectedbeard] = useState(0);
    const [selectedeye,setSelectedeye] = useState(0);
    const [selectedface,setSelectedface] = useState(0);
    const [selectedglasses,setSelectedglasses] = useState(0);
    const [selectedhair,setSelectedhair] = useState(0);
    const [selectedhat,setSelectedhat] = useState(0);
    const [selectedmouth,setSelectedmouth] = useState(0);
    const [selectednose,setSelectednose] = useState(0);
    const [selectedbeardcol,setSelectedbeardcol] = useState(0);
    const [selectedbrowcol,setSelectedbrowcol] = useState(0);
    const [selectedeyeshadow,setSelectedeyeshadow] = useState(0);
    const [selectedhaircol,setSelectedhaircol] = useState(0);
    const [selectedlipstick,setSelectedlipstick] = useState(0);
    const [selectedpupil,setSelectedpupil] = useState(0);
    const [selectedskincol,setSelectedskincol] = useState(0);
    const [selectedbody,setSelectedbody] = useState(0);
    const [selectedfacesh,setSelectedfacesh] = useState(0);
    const [selectededit,setSelectededit] = useState("");
    
    const outfits = libmoji.getOutfits(libmoji.getBrands(genders[selectedgender][0])[0]);
    //libmoji.buildPreviewUrl("body",3,genders[selectedgender][1],styles[1][1],0,traits,)
    console.log(outfits);
    //console.log(malebrands);
    //console.log(currenttrait[4].options[selectedeye]);
    //console.log(currenttrait[0].options[0].value);
    //console.log(selectedeye);
   
    let avatar = ("https://preview.bitmoji.com/avatar-builder-v3/preview/body?scale=3&gender="+genders[selectedgender][1]+"&style=5&rotation=0&hair="+currenttrait[9].options[selectedhair].value+"&hat="+currenttrait[10].options[selectedhat].value+"&mouth="+currenttrait[12].options[selectedmouth].value+"&nose="+currenttrait[13].options[selectednose].value+"&beard="+currenttrait[0].options[selectedbeard].value+"&cheek_details="+currenttrait[2].options[selectedcheek].value+"&ear="+currenttrait[3].options[selectedear].value+"&eye="+currenttrait[4].options[selectedeye].value+"&eyelash="+currenttrait[5].options[selectedeyelash].value+"&eye_details="+currenttrait[6].options[selectedeye].value+"&face_lines="+currenttrait[7].options[selectedface].value+"&glasses="+currenttrait[8].options[selectedglasses].value+"&beard_tone="+currenttrait[14].options[selectedbeardcol].value+"&brow_tone="+currenttrait[16].options[selectedbrowcol].value+"&eyeshadow_tone="+currenttrait[17].options[selectedeyeshadow].value+"&hair_tone="+currenttrait[18].options[selectedhaircol].value+"&lipstick_tone="+currenttrait[20].options[selectedlipstick].value+"&pupil_tone="+currenttrait[21].options[selectedpupil].value+"&skin_tone="+currenttrait[22].options[selectedskincol].value+"&body="+currenttrait[23].options[selectedbody].value+"&face_proportion="+currenttrait[24].options[selectedfacesh].value+"&brow="+currenttrait[1].options[selectedbrow].value+"&outfit="+outfits[selectedoutfit].id);

async function save()
{
    dispatch({
        type:'update_avatar', 
        payload: {
            avatar: avatar
        }
    });
    let data = {
        username: globalStateVars.state.user,
        property: "avatar",
        content: avatar
    };

    await axios.post('/api/user/profile/update', data);
}

function loadUserdata()
{

}

function makechange(value){

    if(value === '+' && selectededit ==="Outfit"){
         if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);}
     if(value === '-' && selectededit ==="Outfit"){
         if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);}
     if(value === '+' && selectededit ==="Beard"){
         if(selectedbeard+1<currenttrait[0].options.length)
        setSelectedbeard(selectedbeard+1);}
     if(value === '-' && selectededit ==="Beard"){
        if(selectedbeard-1>-1)
        setSelectedbeard(selectedbeard-1);}
    if(value === '+' && selectededit ==="Brow")
     {
        if(selectedbrow+1<currenttrait[1].options.length)
        setSelectedbrow(selectedbrow+1);
    }
    if(value === '-' && selectededit ==="Brow")
     {
        if(selectedbrow-1>-1)
        setSelectedbrow(selectedbrow-1);
    }
    
    if(value === '+' && selectededit ==="Eyes"){
         if(selectedeye+1<7)
        setSelectedeye(selectedeye+1); }
    if(value === '-' && selectededit ==="Eyes"){
         if(selectedeye-1>-1)
        setSelectedeye(selectedeye-1);}
        
     if(value === '+' && selectededit ==="Ear"){
         if(selectedear+1<currenttrait[3].options.length)
        setSelectedear(selectedear+1);}
     if(value === '-' && selectededit ==="Ear"){
         if(selectedear-1>-1)
        setSelectedear(selectedear-1);}

        if(value === '+' && selectededit ==="Cheek"){
            if(selectedcheek+1<currenttrait[2].options.length)
           setSelectedcheek(selectedcheek+1);}
        if(value === '-' && selectededit ==="Cheek"){
            if(selectedcheek-1>-1)
           setSelectedcheek(selectedcheek-1);}
        
           if(value === '+' && selectededit ==="Eyelash"){
            if(selectedeyelash+1<currenttrait[5].options.length)
           setSelectedeyelash(selectedeyelash+1);}
        if(value === '-' && selectededit ==="Eyelash"){
            if(selectedeyelash-1>-1)
           setSelectedeyelash(selectedeyelash-1);}
     
    if(value === '+' && selectededit ==="Glasses")
    {
        if(selectedglasses+1<currenttrait[1].options.length)
        setSelectedglasses(selectedglasses+1);
    }
    if(value === '-' && selectededit ==="Glasses")
    {
        if(selectedglasses-1>-1)
        setSelectedglasses(selectedglasses-1);
    }
    if(value === '+' && selectededit ==="Hair")
     {
        if(selectedhair+1<currenttrait[9].options.length)
        setSelectedhair(selectedhair+1);
    }
    if(value === '-' && selectededit ==="Hair")
     {
        if(selectedhair-1>-1)
        setSelectedhair(selectedhair-1);
    }
    if(value === '+' && selectededit ==="Hat")
     {
        if(selectedhat+1<currenttrait[10].options.length)
        setSelectedhat(selectedhat+1);
    }
    if(value === '-' && selectededit ==="Hat")
     {
        if(selectedhat-1>-1)
        setSelectedhat(selectedhat-1);
    }
    if(value === '+' && selectededit ==="Mouth")
     {
        if(selectedmouth+1<currenttrait[12].options.length)
        setSelectedmouth(selectedmouth+1);
    }
    if(value === '-' && selectededit ==="Mouth")
     {
        if(selectedmouth-1>-1)
        setSelectedmouth(selectedmouth-1);
    }
    if(value === '+' && selectededit ==="Nose")
    {
        if(selectednose+1<currenttrait[13].options.length)
        setSelectednose(selectednose+1);
    }
    if(value === '-' && selectededit ==="Nose")
     {
        if(selectednose-1>-1)
        setSelectednose(selectednose-1);
    }
    
    if(value === '+' && selectededit === "Beard Color"){
         if(selectedbeardcol+1<currenttrait[14].options.length)
        setSelectedbeardcol(selectedbeardcol+1);}

     if(value === '-' && selectededit ==="Beard Color"){
         if(selectedbeardcol-1>-1)
        setSelectedbeardcol(selectedbeardcol-1);}

     if(value === '+' && selectededit ==="Brow Color"){
         if(selectedbrowcol+1<currenttrait[16].options.length)
        setSelectedbrowcol(selectedbrowcol+1);}

     if(value === '-' && selectededit ==="Brow Color"){
         if(selectedbrowcol-1>-1)
        setSelectedbrowcol(selectedbrowcol-1);}

     if(value === '+' && selectededit ==="Eye Shadow"){
         if(selectedeyeshadow+1<currenttrait[17].options.length)
        setSelectedeyeshadow(selectedeyeshadow+1);}

     if(value === '-' && selectededit ==="Eye Shadow"){
         if(selectedeyeshadow-1>-1)
        setSelectedeyeshadow(selectedeyeshadow-1);}

     if(value === '+' && selectededit ==="Hair Color"){
         if(selectedhaircol+1<currenttrait[18].options.length)
        setSelectedhaircol(selectedhaircol+1);}

     if(value === '-' && selectededit ==="Hair Color"){
         if(selectedhaircol-1>-1)
        setSelectedhaircol(selectedhaircol-1);}

     if(value === '+' && selectededit ==="Lipstick"){
         if(selectedlipstick+1<currenttrait[20].options.length)
        setSelectedlipstick(selectedlipstick+1);}

     if(value === '-' && selectededit ==="Lipstick"){
         if(selectedlipstick-1>-1)
        setSelectedlipstick(selectedlipstick-1);}

     if(value === '+' && selectededit ==="Eye Color"){
         if(selectedpupil+1<currenttrait[21].options.length)
        setSelectedpupil(selectedpupil+1);}

     if(value === '-' && selectededit ==="Eye Color"){
         if(selectedpupil-1>-1)
        setSelectedpupil(selectedpupil-1);}

     if(value === '+' && selectededit ==="Skin Color"){
         if(selectedskincol+1<currenttrait[22].options.length)
        setSelectedskincol(selectedskincol+1);}
        
     if(value === '-' && selectededit ==="Skin Color"){
         if(selectedskincol-1>-1)
        setSelectedskincol(selectedskincol-1);}

     if(value === '+' && selectededit ==="Body"){
         if(selectedbody+1<currenttrait[23].options.length)
        setSelectedbody(selectedbody+1);}

     if(value === '-' && selectededit ==="Body"){
         if(selectedbody-1>-1)
        setSelectedbody(selectedbody-1);}

     if(value === '+' && selectededit ==="Face"){
         if(selectedfacesh+1<currenttrait[24].options.length)
        setSelectedfacesh(selectedfacesh+1);}

     if(value === '-' && selectededit ==="Face"){
         if(selectedfacesh-1>-1)
        setSelectedfacesh(selectedfacesh-1);}
    

}
    

    
    

    return (
        <Fragment>
        <div className="App">
            <header className="App-header"></header>
        </div>
        <div className="conteditav">
            <div className="avtrcol1">
    <div className="editavtrrow">
        <img src={arrow2} onClick = {()=> makechange("-")} className="arrowimg" height="80" width="100" ></img>
        <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectededit}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick = {()=> setSelectededit("Outfit")}>Outfit</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Beard")}>Beard</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Eyes")}>Eyes</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Face")}>Face</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Beard Color")}>Beard Color</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Brow Color")}>Brow Color</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Eye Shadow")}>Eye Shadow</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Hair Color")}>Hair Color</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Lipstick")}>Lipstick</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Eye Color")}>Eye Color</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Skin Color")}>Skin Color</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Brow")}>Brow</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Glasses")}>Glasses</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Hair")}>Hair</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Hat")}>Hat</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Mouth")}>Mouth</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Nose")}>Nose</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Body")}>Body</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Ear")}>Ears</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Cheek")}>Cheeks</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Eyelash")}>Eyelashes</Dropdown.Item>
                </Dropdown.Menu>
        </Dropdown>
        <img src={arrow} onClick = {()=> makechange("+")} className="arrowimg" height="80" width="100"  ></img>
        
    </div>
    <div className="editavtrrow">
        
            <Button variant="primary" onClick = {()=> setSelectedgender(0)}>Male</Button>{' '}
            <Button variant="primary" onClick = {()=> setSelectedgender(1)}>Female</Button>{' '} 
       
    </div>
   
    </div>
    <div className="avtrcol2">
        <h1 className="avtrheading">Edit Avatar</h1>
        
        <img src={avatar} className="avatarimg" height="450" width="500">
        </img>
        
        
        <button name="save" className="avtrsave" onClick = {()=> save()}>Save</button>
        <button name="cancel" className="avtrsave">Cancel</button>
    </div>
</div>
</Fragment>
    );
}

export default EditAvatar;
