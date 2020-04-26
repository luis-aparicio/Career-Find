import React, { useState, Fragment } from 'react';
import hum from './human.jpg'
import './rew.css';
import {globalState} from '../../state/globalState';
import libmoji from 'libmoji';

function Reward() {

    const[message, setmessage] = useState("");
    const[selected, setSelected] = useState(false);
    const[currentBrand,setCurrentBrand] = useState({});
    const globalStaterewards = React.useContext(globalState);
    const { dispatch } = globalStaterewards;

    
    const malebrands = libmoji.getBrands("male");
    const femalebrands = libmoji.getBrands("female");

    
    console.log(malebrands);
    console.log(femalebrands);

    function buy(outfit)
    {
        console.log(globalStaterewards.points);
        if(globalStaterewards.points>2)
        {
            //male
            if(outfit.outfit.includes("1"))
            {
                if(globalStaterewards.maleCloset.includes(outfit.id))
                {
                    setmessage("You already have this item");
                    return 0;
                }
                setmessage("Item purchased!")
                globalStaterewards.maleCloset.push(outfit.id);
                globalStaterewards.points = globalStaterewards.points - 2;
            }

            //female
            if(outfit.outfit.includes("2"))
            {
                if(globalStaterewards.femaleCloset.includes(outfit.id))
                {
                    setmessage("You already have this item");
                    return 0;
                }
                setmessage("Item purchased!")
                globalStaterewards.maleCloset.push(outfit.id);
                globalStaterewards.points = globalStaterewards.points - 2;
            }


            
           



        }

        setmessage("You need more points for this item")
    }
    
    function switchview(brand){
        setSelected(true);
        setCurrentBrand(brand);
    }

    if(selected)
    {
        return(
            <Fragment>
            <div className="App">
                <header className="App-header">
                </header>
            </div>
    
            <div className="avtrcont">
               <center> <h1 className="avtrheadig">List of Available Brands</h1></center>
               <div className="avatrow">
                <h1>{currentBrand.name}</h1>
                {currentBrand.outfits.map(outfit => <img src={outfit.image} onClick = {()=> buy(outfit)} className="avtrimg" height="70" width="60"></img>)}
                </div>
               
                
                
                <div className="pnts">
                    <h3 className="pntshead">{message}</h3>
                    <h3 className="pntshead">Total Points:</h3>
                    <h3 className="scorehead">{globalStaterewards.points}</h3>
                    <button name="purchase" className="purbtn" onClick = {()=> setSelected(false)}>Back</button>
                    
                </div>
            </div>
        
            </Fragment>
        )
    }
    
    return (
        <Fragment>
        <div className="App">
            <header className="App-header">
            </header>
        </div>

        <div className="avtrcont">
           <center> <h1 className="avtrheadig">List of Available Brands</h1></center>
           <div className="avatrow">
           <h1>Male</h1>
            {malebrands.map(brand => <img src={brand.logo} onClick = {()=> switchview(brand)} className="avtrimg" height="40" width="80"></img>)}
           </div>
           <div className="avatrow">
           <h1>Female</h1>
            {femalebrands.map(brand => <img src={brand.logo} onClick = {()=> switchview(brand)} className="avtrimg" height="40" width="80"></img>)}
           </div>
            
            <div className="pnts">
                
                <h3 className="pntshead">Total Points:</h3>
                <h3 className="scorehead">{globalStaterewards.points}</h3>
            </div>
        </div>
    
        </Fragment>
    );


}

export default Reward;
