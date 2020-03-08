import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import Container from 'react-bootstrap/Container'
import NavBar from 'react-bootstrap/Navbar'
import { NavbarBrand } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className = "fixed-bottom">
           <NavBar>
               <Container>
               
               </Container>
           </NavBar>
        </div>
    )
};

export default Footer;
