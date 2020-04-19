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
import Careerpage from './careerpage'
import './careers.css';
import axios from 'axios'

function Careers() {

    const [clustername,setClustername] = useState("");
    const [clusterselected,setClusterselected] = useState(false);
    const [allcareers,setAllcareers] = useState({careers:[]});
    const [reducedcareers,setReducedcareers] = useState({careers:[]});
    const [loaded,setloaded] = useState(false);
    

    const fetchCareers = async () =>{
        if(!loaded){
          await axios.get('/api/career/get')
        .then(response => {
        //console.log(response.data);
        
        setAllcareers(response.data);
        setloaded(true);
        
            })  
        }

        
        
    }

    fetchCareers();
    
    const handleClick = async (code) => {
        
        if(loaded){
        await setReducedcareers(allcareers
        .filter(career =>{
            return career.OnetCode.includes(code);
        }));

        setClusterselected(true);
        setClustername(code);
        }

        

    }

    

    if (clusterselected === false)
    {
        return (
            <div className="Careers">
            <Container>
            <Row>
                <CardDeck>
                    <Card bg = "success">
                    
                        <Card.Img  variant="top" src= {env} />
                        <Card.Body>
                        <Card.Title>Environmental and Agricultural Sciences</Card.Title>
                        <Card.Text>
                        Careers in Agricultural, Food, and Natural Resources
                        </Card.Text>
                        <Button variant="light" size="lg" block onClick = {()=> handleClick("19-")} >
                            Career List
                        </Button>
                        </Card.Body>
                    
                    </Card>
                    <Card bg = "secondary">
                        <Card.Img variant="top" src = {cisimg} />
                        <Card.Body>
                        <Card.Title>Communications and Information Systems</Card.Title>
                        <Card.Text>
                        Careers in IT, Computer Science, and Data Analysis
                        </Card.Text>
                        <Button variant="light" size="lg" block onClick = {()=> handleClick("15-")} >
                            Career List
                        </Button>
                        </Card.Body>
                        
                    </Card>
                    <Card bg = "warning">
                        <Card.Img variant="top" src= {ind} />
                        <Card.Body>
                        <Card.Title>Industrial, Manufacturing, and Engineering</Card.Title>
                        <Card.Text>
                        Careers in Equiptment Manufacturing, Technical, and Fabricated Services
                        </Card.Text>
                        <Button variant="light" size="lg" block onClick = {()=> handleClick("47-")} >
                            Career List
                        </Button>
                        </Card.Body>
                        
                    </Card>
                    </CardDeck>
            </Row>

            <Row>
                <CardDeck>
                    <Card bg = "danger">
                        <Card.Img variant="top" src= {health} />
                        <Card.Body>
                        <Card.Title>Health Sciences</Card.Title>
                        <Card.Text>
                        Careers in Health Administration, Technologist, and Interpreter 
                        </Card.Text>
                        <Button variant="light" size="lg" block onClick = {()=> handleClick("29-")} >
                            Career List
                        </Button>
                        </Card.Body>
                    </Card>
                    <Card bg = "info">
                        <Card.Img variant="top" src= {hum} />
                        <Card.Body>
                        <Card.Title>Human Services and Resources</Card.Title>
                        <Card.Text>
                        Careers in Psychology, Social, and Youth Work
                        </Card.Text>
                        <Button variant="light" size="lg" block onClick = {()=> handleClick("21-")} >
                            Career List
                        </Button>
                        </Card.Body>
                    </Card>
                    <Card bg = "primary">
                        <Card.Img variant="top" src= {bus} />
                        <Card.Body>
                        <Card.Title>Business, Marketing and Management</Card.Title>
                        <Card.Text>
                        Careers in Marketing Coordination, Graphic Design, and Public Relations Management
                        </Card.Text>
                        <Button variant="light" size="lg" block onClick = {()=> handleClick("13-")} >
                            Career List
                        </Button>
                        </Card.Body>
                    </Card>
                    </CardDeck>
            </Row>
            <Row>
            <Button variant="outline-dark" onClick = {()=> handleClick("-")}>All Careers</Button>
            </Row>
            </Container>
            </div>
        );
    }

    else {
        
          return (
                    <div>
                        <Careerpage clustername={clustername}
                        allcareers = {allcareers}
                        reducedcareers = {reducedcareers}
                        />
                    </div>
                
            )
        
    }
}

export default Careers;
