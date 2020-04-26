import React, { useState, Fragment } from 'react';
import hum from './human.jpg'
import './rew.css';
import {globalState} from '../../state/globalState';
import libmoji from 'libmoji';
import axios from 'axios';

function Reward() {

    const[message, setmessage] = useState("");
    const[selected, setSelected] = useState(false);
    const[genderselected,setGenderselected] = useState("");
    const[currentBrand,setCurrentBrand] = useState({});
    const globalStaterewards = React.useContext(globalState);
    const { dispatch } = globalStaterewards;

    
    const malebrands = libmoji.getBrands("male");
    const femalebrands = libmoji.getBrands("female");

    
    console.log(malebrands);
    console.log(femalebrands);

    async function buy(outfit)
    {
        //console.log(globalStaterewards.state.points>2);
        console.log(outfit.outfit.includes("1"));
        if(globalStaterewards.state.points>=2)
        {
            
            setmessage("greater than 2")
            //male
            if(genderselected === "male")
            {
                if(globalStaterewards.state.maleCloset.includes(outfit.id))
                {
                    setmessage("You already have this item");
                    return 0;
                }
                setmessage("Item purchased!")
                let currentMaleCloset = globalStaterewards.state.maleCloset;
                currentMaleCloset.push(outfit.id);
                
                dispatch({
                    type:'update_points', 
                    payload: {
                        points: globalStaterewards.state.points -2
                    }
                });
                let pointsdata = {
                    username: globalStaterewards.state.user,
                    property: "points",
                    content: globalStaterewards.state.points -2
                };
            
                await axios.post('/api/user/profile/update', pointsdata);

                dispatch({
                    type:'update_male_closet', 
                    payload: {
                        maleCloset: currentMaleCloset
                    }
                });
                let maleclosetdata = {
                    username: globalStaterewards.state.user,
                    property: "maleCloset",
                    content: currentMaleCloset
                };
            
                await axios.post('/api/user/profile/update', maleclosetdata);
            }

            //female
            if(genderselected === "female")
            {
                if(globalStaterewards.state.femaleCloset.includes(outfit.id))
                {
                    setmessage("You already have this item");
                    return 0;
                }
                setmessage("Item purchased!")
                let currentFemaleCloset = globalStaterewards.state.femaleCloset;
                currentFemaleCloset.push(outfit.id);
                
                dispatch({
                    type:'update_points', 
                    payload: {
                        points: globalStaterewards.state.points -2
                    }
                });
                let pointsdata = {
                    username: globalStaterewards.state.user,
                    property: "points",
                    content: globalStaterewards.state.points -2
                };
            
                await axios.post('/api/user/profile/update', pointsdata);

                dispatch({
                    type:'update_female_closet', 
                    payload: {
                        femaleCloset: currentFemaleCloset
                    }
                });
                let femaleclosetdata = {
                    username: globalStaterewards.state.user,
                    property: "femaleCloset",
                    content: currentFemaleCloset
                };
            
                await axios.post('/api/user/profile/update', femaleclosetdata);
            }

            return 0;
        }

        setmessage("You need more points for this item");
    }
    
    function switchview(brand,i){

        if(i === 1)
        {
            setGenderselected("male");
        }

        if(i === 2)
        {
            setGenderselected("female");
        }

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
                    <h3 className="scorehead">{globalStaterewards.state.points}</h3>
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
            {malebrands.map(brand => <img src={brand.logo} onClick = {()=> switchview(brand,1)} className="avtrimg" height="40" width="80"></img>)}
           </div>
           <div className="avatrow">
           <h1>Female</h1>
            {femalebrands.map(brand => <img src={brand.logo} onClick = {()=> switchview(brand,2)} className="avtrimg" height="40" width="80"></img>)}
           </div>
            
            <div className="pnts">
                
                <h3 className="pntshead">Total Points:</h3>
                <h3 className="scorehead">{globalStaterewards.state.points}</h3>
            </div>
        </div>
    
        </Fragment>
    );


}

export default Reward;
