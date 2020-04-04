import React,{useState} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import cisimg from './maxresdefault.jpg'
import env from './eas.jpg'
import ind from './IME.jpg'
import bus from './business.jpg'
import health from './healthcaresystem.jpg'
import hum from './human.jpg'
import Button from'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import Careers from './careers';
import Careerpage from './careerpage';
import './careers.css';

function SearchPage() {

    const [clustername,setClustername] = useState("");
    const [clusterselected,setClusterselected] = useState(false);
    
    const handleClick = async (title) => {
        setClusterselected(true);
        setClustername(title)
    }

    if (clusterselected === false)
    {
        return (
            <div className="search">
                <center><h1>Search for a Career</h1></center>
                
            <select id="search" name="search" value={clustername} onChange={handleClick}>
<option value="default">Search for a career..</option>
<option value="env">Environmental and Agricultural Sciences</option>
<option value="it">Communications and Information Systems</option>
<option value="man">Industrial, Manufacturing, and Engineering</option>
<option value="heal">Health Sciences</option>
<option value="human">Human Services and Resources</option>
<option value="bus">Business, Marketing and Management</option>
</select>
            </div>
        );
    }

    else {

        return (
        <div>
            <Careers clustername={clustername} clusterselected = {true}
            />
        </div>
            
        )
    }
}

export default SearchPage;
