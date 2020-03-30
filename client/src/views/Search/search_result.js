import React from 'react';
import './search_result.css';
import { Link } from 'react-router-dom';
import Careerpage from '../Careers/careerpage'

function Search() {
    return (
        <div className="App">
            
                    <center><h1>Search Results</h1></center>
                    <center><h5>Based on your search we found the following occupation</h5></center>
                    <div className="row">
                    <a href='/CareerPage'>Software Developers</a>
                    <div className="description">
                    <span><p>Develop, create, and modify general computer applications software or specialized utility programs. Analyze user needs and develop software solutions.</p></span></div>
                    </div>
                    <div className="row">
                    <a href='/CareerPage'>Software Developers</a>
                    <div className="description">
                    <span><p>Develop, create, and modify general computer applications software or specialized utility programs. Analyze user needs and develop software solutions.</p></span></div>
                    </div>
                    <div className="row">
                    <a href='/CareerPage'>Software Developers</a>
                    <div className="description">
                    <span><p>Develop, create, and modify general computer applications software or specialized utility programs. Analyze user needs and develop software solutions.</p></span></div>
                    </div>
                    <div className="row">
                    <a href='/CareerPage'>Software Developers</a>
                    <div className="description">
                    <span><p>Develop, create, and modify general computer applications software or specialized utility programs. Analyze user needs and develop software solutions.</p></span></div>
                    </div><div className="row">
                    <a href='/CareerPage'>Software Developers</a>
                    <div className="description">
                    <span><p>Develop, create, and modify general computer applications software or specialized utility programs. Analyze user needs and develop software solutions.</p></span></div>
                    </div>
               
           
        </div>
    );
}

export default Search;
