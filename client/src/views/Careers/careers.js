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

function Careers() {

    const [clustername,setClustername] = useState("");
    const [clusterselected,setClusterselected] = useState(false);
    
    const handleClick = async (title) => {
        setClusterselected(true);
        setClustername(title)
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
                        <Button variant="light" size="lg" block onClick = {()=> handleClick("env")} >
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
                        <Button variant="light" size="lg" block onClick = {()=> handleClick("it")} >
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
                        <Button variant="light" size="lg" block onClick = {()=> handleClick("man")} >
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
                        <Button variant="light" size="lg" block onClick = {()=> handleClick("heal")} >
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
                        <Button variant="light" size="lg" block onClick = {()=> handleClick("human")} >
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
                        <Button variant="light" size="lg" block onClick = {()=> handleClick("bus")} >
                            Career List
                        </Button>
                        </Card.Body>
                    </Card>
                    </CardDeck>
            </Row>
            </Container>
            </div>
        );
    }

    else {

        return (
        <div>
            <Careerpage clustername={clustername}
            />
        </div>
            
        )
    }
}

export default Careers;
