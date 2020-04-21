import React, { Fragment, useState } from 'react';
import logo from '../../assets/logo.svg';
import './avtr.css';
import arrow from './icon.png'
import arrow2 from './icon2.png'
import Button from 'react-bootstrap/Button'
import libmoji from 'libmoji'
import Dropdown from 'react-bootstrap/Dropdown'


function EditAvatar() {
    const defaulttraits = libmoji.getTraits("male","bitmoji");
    const genders = [["male",1],["female",2]];
    const poses = ["fashion","head","body"];
    const malebrands = libmoji.getBrands("male");
    const femalebrands = libmoji.getBrands("female");
    
    const styles = [["bitstrips",1],['bitmoji',4],["cm",5]];

    const [selectedoutfit,setSelectedoutfit] = useState(0);
    const [selectedgender,setSelectedgender] = useState(0);
    const [currenttrait,setCurrenttrait] = useState(defaulttraits);

    const [selectedbeard,setSelectedbeard] = useState(0);
    const [selectedbrow,setSelectedbrow] = useState(0);
    const [selectedeye,setSelectedeye] = useState(0);
    const [selectedface,setSelectedface] = useState(0);
    const [selectedglasses,setSelectedglasses] = useState(0);
    const [selectedhair,setSelectedhair] = useState(0);
    const [selectedhat,setSelectedhat] = useState(0);
    const [selectedmouth,setSelectedmouth] = useState(0);
    const [selectednose,setSelectednose] = useState(0);
    const [selectedbeardcol,setSelectedbeardcol] = useState(0);
    const [selectedbrowcol,setbrowcol] = useState(0);
    const [selectedeyeshadow,setSelectedeyeshadow] = useState(0);
    const [selectedhaircol,setSelectedhaircol] = useState(0);
    const [selectedlipstick,setSelectedlipstick] = useState(0);
    const [selectedpupil,setpupil] = useState(0);
    const [selectedskincol,setSelectedskincol] = useState(0);
    const [selectedbody,setSelectedbody] = useState(0);
    const [selectedfacesh,setSelectedfacesh] = useState(0);
    const [selectededit,setSelectededit] = useState("");
    
    const outfits = libmoji.getOutfits(libmoji.getBrands(genders[selectedgender][0])[0]);
    //libmoji.buildPreviewUrl("body",3,genders[selectedgender][1],styles[1][1],0,traits,)
    
    //console.log(maleoutfits);
    //console.log(libmoji.getTraits("male","bitmoji"));
    //console.log(currenttrait[0].options[selectedbeard].value);
    
    //console.log(selectedoutfit);

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
     /*
    if(value === '+' && selectededit ===)
    function browplus(){
        if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);
    }
    if(value === '-' && selectededit ===)
    function browminus(){
        if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);
    }
    */
    if(value === '+' && selectededit ==="Eyes"){
         if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1); }
    if(value === '-' && selectededit ==="Eyes"){
         if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);}
     if(value === '+' && selectededit ==="Face"){
         if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);}
     if(value === '-' && selectededit ==="Face"){
         if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);}
     /*
    if(value === '+' && selectededit ===)
    function glassesplus(){
        if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);
    }
    if(value === '-' && selectededit ===)
    function glassesminus(){
        if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);
    }
    if(value === '+' && selectededit ===)
    function hairplus(){
        if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);
    }
    if(value === '-' && selectededit ===)
    function hairminus(){
        if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);
    }
    if(value === '+' && selectededit ===)
    function hatplus(){
        if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);
    }
    if(value === '-' && selectededit ===)
    function hatminus(){
        if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);
    }
    if(value === '+' && selectededit ===)
    function mouthplus(){
        if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);
    }
    if(value === '-' && selectededit ===)
    function mouthminus(){
        if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);
    }
    if(value === '+' && selectededit ===)
    function noseplus(){
        if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);
    }
    if(value === '-' && selectededit ===)
    function noseminus(){
        if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);
    }
    */
    if(value === '+' && selectededit === "Beard Color"){
         if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);}
     if(value === '-' && selectededit ==="Beard Color"){
         if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);}
     if(value === '+' && selectededit ==="Brow Color"){
         if(selectedbrowcol+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);}
     if(value === '-' && selectededit ==="Brow Color"){
         if(selectedbrowcol-1>-1)
        setSelectedoutfit(selectedoutfit-1);}
     if(value === '+' && selectededit ==="Eye Shadow"){
         if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);}
     if(value === '-' && selectededit ==="Eye Shadow"){
         if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);}
     if(value === '+' && selectededit ==="Hair Color"){
         if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);}
     if(value === '-' && selectededit ==="Hair Color"){
         if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);}
     if(value === '+' && selectededit ==="Lipstick"){
         if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);}
     if(value === '-' && selectededit ==="Lipstick"){
         if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);}
     if(value === '+' && selectededit ==="Eye Color"){
         if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);}
     if(value === '-' && selectededit ==="Eye Color"){
         if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);}
     if(value === '+' && selectededit ==="Skin Color"){
         if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);}
     if(value === '-' && selectededit ==="Skin Color"){
         if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);}
     if(value === '+' && selectededit ==="Body"){
         if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);}
     if(value === '-' && selectededit ==="Body"){
         if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);}
     if(value === '+' && selectededit ==="Face Shape"){
         if(selectedoutfit+1<outfits.length)
        setSelectedoutfit(selectedoutfit+1);}
     if(value === '-' && selectededit ==="Face Shape"){
         if(selectedoutfit-1>-1)
        setSelectedoutfit(selectedoutfit-1);}
    

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
                    <Dropdown.Item onClick = {()=> setSelectededit("Body")}>Body</Dropdown.Item>
                    <Dropdown.Item onClick = {()=> setSelectededit("Face Shape")}>Face Shape</Dropdown.Item>
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
        
        <img src={"https://preview.bitmoji.com/avatar-builder-v3/preview/body?scale=3&gender="+genders[selectedgender][1]+"&style=4&rotation=0&beard="+currenttrait[0].options[selectedbeard].value+"&eye_details="+currenttrait[3].options[selectedeye].value+"&face_lines="+currenttrait[4].options[selectedface].value+"&beard_tone="+currenttrait[10].options[selectedbeardcol].value+"&brow_tone="+currenttrait[12].options[selectedbrowcol].value+"&eyeshadow_tone="+currenttrait[13].options[selectedeyeshadow].value+"&hair_tone="+currenttrait[14].options[selectedhaircol].value+"&lipstick_tone="+currenttrait[15].options[selectedlipstick].value+"&pupil_tone="+currenttrait[16].options[selectedpupil].value+"&skin_tone="+currenttrait[17].options[selectedskincol].value+"&body="+currenttrait[18].options[selectedbody].value+"&face_proportion="+currenttrait[19].options[selectedfacesh].value+"&outfit="+outfits[selectedoutfit].id} className="avatarimg" height="450" width="500">
        </img>
        
    
        <button name="save" className="avtrsave">Save</button>
        <button name="cancel" className="avtrsave">Cancel</button>
    </div>
</div>
</Fragment>
    );
}

export default EditAvatar;
