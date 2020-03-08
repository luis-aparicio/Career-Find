import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import cisimg from './maxresdefault.jpg'

import './careers.css';


function Careers() {
    return (
        <div className="Careers">
        <Container>
           <Row>
            <CardDeck>
                <Card bg = "success">
                    <Card.Img  variant="top" src="holder.js/100px160"/>
                    <Card.Body>
                    <Card.Title>Environmental and Agricultural Sciences</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                   
                </Card>
                <Card bg = "secondary">
                    <Card.Img variant="top" src = {cisimg} />
                    <Card.Body>
                    <Card.Title>Communications and Information Systems</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card bg = "warning">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Industrial, Manufacturing, and Engineering</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                </CardDeck>
           </Row>

           <Row>
            <CardDeck>
                <Card bg = "danger">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Health Sciences</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg = "info">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Human Services and Resources</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg = "primary">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Business, Marketing and Management</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>
           </Row>
           </Container>
        </div>
    );
}

export default Careers;
