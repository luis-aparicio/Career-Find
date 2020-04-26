
import ListGroup from 'react-bootstrap/ListGroup';
import React, {useState, useEffect, Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import business from './business.jpg';
import { globalState } from "../../state/globalState";


const Careerpage = (props) => {

const [careername,setCareername] = useState("");
const [careerselected,setCareerselected] = useState(false);
const [careerdata,setCareerdata] = useState({career:[]});
const [isFavorite, setIsFavorite] = useState(false);

const globalStateVars = React.useContext(globalState);
const { dispatch } = globalStateVars;
let currFavorites = globalStateVars.state.favorites;
let newFavorites = currFavorites;


let map = props.reducedcareers.map(career => 
    
    <ListGroup>
        <ListGroup.Item action onClick = {()=> handleClick([career])}>{career.OnetTitle}</ListGroup.Item>
    </ListGroup>
)



async function handleClick (data) {

    setCareerdata(data);
    setCareername(data[0].OnetTitle);
    setCareerselected(true);
    
    //initialize favorite button
    for(let i in newFavorites) {
        let found = false;
        if(newFavorites[i] === data[0].OnetTitle){
            setIsFavorite(true);
            found = true;
        }
        if(found === false)
            setIsFavorite(false);
    }  
}


async function handleFavoriteClick () {
    console.log(isFavorite);
    if(isFavorite) {//already a favorite, un-favorite on click
        console.log("favorite removed");
        for(let i in newFavorites) {
            if(newFavorites[i] === careername) {
                newFavorites.splice(i,1);
                //add code here to update back end
            }
        }
        setIsFavorite(false); //in case problem finding
    } else {
        console.log("favorites" + newFavorites);
        console.log ("career: " + careername);
        newFavorites.push(careername);
        setIsFavorite(true);
    }
    //update global state var
    dispatch({ 
        type:'update', 
        payload: {
            property: "favorites",
            content: isFavorite
        }
    });
}

    

    if (props.clustername === "19-" && careerselected === false) { 
        
        return (
            <Container>
                <h1 style={{color: "green"}}>Environmental and Agricultural Sciences</h1>
                {map}
                <center><Button className = "editbtn" variant="outline-danger" onClick = {()=> props.setClusterselected(false)}>Back</Button></center>
            </Container>
       );
    }

    if (props.clustername === "15-" && careerselected === false) { 
        
        return (
            <Container>
                <h1 style={{color: "grey"}}>Communications and Information Systems</h1>
                {map}
                <center><Button className = "editbtn" variant="outline-danger" onClick = {()=> props.setClusterselected(false)}>Back</Button></center>
            </Container>
        
       );
    }
    if (props.clustername === "47-" && careerselected === false) { 
        
        return (
            <Container>
                <h1 style={{color: "orange"}}>Industrial, Manufacturing, and Engineering</h1>
                {map}
                <center><Button className = "editbtn" variant="outline-danger" onClick = {()=> props.setClusterselected(false)}>Back</Button></center>
            </Container>
        
       );
    }
    if (props.clustername === "29-" && careerselected === false) { 
        
        return (
            <Container>
                <h1 style={{color: "red"}}>Health Sciences</h1>
                {map}
                <center><Button className = "editbtn" variant="outline-danger" onClick = {()=> props.setClusterselected(false)}>Back</Button></center>
            </Container>
        
       );
    }
    if (props.clustername === "21-" && careerselected === false) { 
        
        return (
            <Container>
                <h1 style={{color: "cyan"}}>Human Services and Resources</h1>
                {map}
                <center><Button className = "editbtn" variant="outline-danger" onClick = {()=> props.setClusterselected(false)}>Back</Button></center>
            </Container>
        
       );
    }
    if (props.clustername === "13-" && careerselected === false) { 
        
        return (
            <Container>
                 <h1 style={{color: "blue"}}>Business, Marketing and Management</h1>
                 {map}
                 <center><Button className = "editbtn" variant="outline-danger" onClick = {()=> props.setClusterselected(false)}>Back</Button></center>
            </Container>
        
       );
    }
    if (props.clustername === "-" && careerselected === false) { 
        
        return (
            <Container>
                 <h1 style={{color: "black"}}>All</h1>
                 {map}
                 <center><Button className = "editbtn" variant="outline-danger" onClick = {()=> props.setClusterselected(false)}>Back</Button></center>
            </Container>
        
       );
    }

    else if(careerselected) {

   //this is the actual career page template
    return (

        <Fragment>
        <div className="careerheader">
       
            <center> 
                <Button variant="outline-danger" 
                        onClick = {()=> setCareerselected(false)}>
                Back
                </Button>
                <Button
                    variant="outline-danger"
                    onClick = {()=> handleFavoriteClick()}>
                        { isFavorite ? 'Remove Favorite' : 'Add Favorite'}
                </Button>
                <h1>{careername}</h1>
            </center>
        
        </div>
    
    <div className="careerrow">
        <div className="leftcol">
            <img src={business} alt="171x180" height="180" width="171" className="careerimg"></img>
        </div>
        {careerdata.map(career =>
        <div className="rightcol">
        <h3>Description</h3>
        <p>{career.OnetDescription}</p>
        </div>
        )}
    </div>
   
    <div className="careerrow">
        <div className="leftcol">
        <h3>Salary</h3>
            <p>Annual wages in United States</p>
                <table>
                    <tr>
                        <td><b>Location</b></td>
                        <td><b>United States</b></td>
                    </tr>
                    <tr>
                        <td><b>10%</b></td>
                        <td>${careerdata[0].Wages.NationalWagesList[1].Pct10}</td>
                    </tr>
                    <tr>
                        <td><b>25%</b></td>
                        <td>${careerdata[0].Wages.NationalWagesList[1].Pct25}</td>
                    </tr>
                    <tr>
                        <td><b>Median</b></td>
                        <td>${careerdata[0].Wages.NationalWagesList[1].Median}</td>
                    </tr>
                    <tr>
                        <td><b>75%</b></td>
                        <td>${careerdata[0].Wages.NationalWagesList[1].Pct75}</td>
                    </tr>
                    <tr>
                        <td><b>90%</b></td>
                        <td>${careerdata[0].Wages.NationalWagesList[1].Pct90}</td>
                    </tr>
                </table>
        </div>
        <div className="rightcol">
            <h3>Watch a Video</h3>
        <iframe src={"http://www.careeronestop.org/videos/Careeronestop-videos-content.aspx?videocode="+careerdata[0].Video[0].VideoCode} width="500" height="300" frameborder="0" scrolling="no" allowfullscreen/>
        </div>
        </div>

        
       
        <div className="careerrow">
        <div className="leftcol">
        
        <h3>Required Abilities</h3>
            <p>People in this career often have talent in:</p>
            {careerdata[0].AbilityDataList.filter(ability => {

                return ability.Importance > 50
            }).map(data => 
            <ol>
                <li>{data.ElementName}</li>
            </ol>)} 
        </div>
        <div className="rightcol">
            <h3>Activities you might do in a day</h3>
            {careerdata[0].Tasks.map(data => 
            <ol>
                <li>{data.TaskDescription}</li>
            </ol>)}
        </div>
        </div>

        <div className="careerrow">
        <div className="leftcol">
        <h3>Required Knowlegde</h3>
            <p>People in this career often know a lot about:</p>
            {careerdata[0].KnowledgeDataList.filter(knowledge => {

                return knowledge.Importance > 50
            }).map(data => 
            <ol>
                <li>{data.ElementName}</li>
            </ol>)}
               
        </div>
        <div className="rightcol">
            <h3>Required Skills</h3>
            <p>People in this career often have these skills:</p>
            {careerdata[0].SkillsDataList.filter(skills => {

                return skills.Importance > 50
            }).map(data => 
            <ol>
                <li>{data.ElementName}</li>
            </ol>)}
        </div>
        </div>

        
    </Fragment>  
            
          
        ); 
    }

    else
    return 0;
}



export default Careerpage;
