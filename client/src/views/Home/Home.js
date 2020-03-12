import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Jumbo from './jumbo.jpg'
import './Home.css';

function Home() {
    return (
        <div className="App">
            <Jumbotron fluid>
                <Container>
                    <Image src= {Jumbo} fluid />
                    <h1>Find Your Future.</h1>
                    <p>
                    Join your classmates in the search for a career that best suits you
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Home;
