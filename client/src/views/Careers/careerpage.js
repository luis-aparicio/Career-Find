
import ListGroup from 'react-bootstrap/ListGroup'
import React, {useState, useEffect, Fragment} from 'react';
import Container from 'react-bootstrap/Container'
import Figure from 'react-bootstrap/Figure'
import business from './business.jpg'

const Careerpage = (props) => {

const [careername,setCareername] = useState("");
const [careerselected,setCareerselected] = useState(false);



const handleClick = async (title) => {
    setCareerselected(true);
    setCareername(title)
}


    if (props.clustername === "env" && careerselected === false) { 
        
        return (
            <Container>
                <h1 style={{color: "green"}}>Environmental and Agricultural Sciences</h1>
                <ListGroup>
                    <ListGroup.Item action onClick = {()=> handleClick("Agricultural Engineer")}>Agricultural Engineer</ListGroup.Item>
                    <ListGroup.Item action>Park Ranger</ListGroup.Item>
                </ListGroup>
            </Container>
       );
    }

    if (props.clustername === "it" && careerselected === false) { 
        
        return (
            <Container>
                <h1 style={{color: "grey"}}>Communications and Information Systems</h1>
                    <ListGroup>
                        <ListGroup.Item action>IT Systems Administrator</ListGroup.Item>
                        <ListGroup.Item action>Performance and Data Analyst</ListGroup.Item>
                    </ListGroup>
            </Container>
        
       );
    }
    if (props.clustername === "man" && careerselected === false) { 
        
        return (
            <Container>
                <h1 style={{color: "orange"}}>Industrial, Manufacturing, and Engineering</h1>
                    <ListGroup>
                        <ListGroup.Item action>Industrial Engineering Technician</ListGroup.Item>
                        <ListGroup.Item action>Health and Safety Engineer</ListGroup.Item>
                    </ListGroup>  
            </Container>
        
       );
    }
    if (props.clustername === "heal" && careerselected === false) { 
        
        return (
            <Container>
                <h1 style={{color: "red"}}>Health Sciences</h1>
                    <ListGroup>
                        <ListGroup.Item action>Pediatrician</ListGroup.Item>
                        <ListGroup.Item action>Biomedical Scientist</ListGroup.Item>
                    </ListGroup>
            </Container>
        
       );
    }
    if (props.clustername === "human" && careerselected === false) { 
        
        return (
            <Container>
                <h1 style={{color: "cyan"}}>Human Services and Resources</h1>
                    <ListGroup>
                        <ListGroup.Item action>School Counselor</ListGroup.Item>
                        <ListGroup.Item action>Sociologist</ListGroup.Item>
                    </ListGroup>
            </Container>
        
       );
    }
    if (props.clustername === "bus" && careerselected === false) { 
        
        return (
            <Container>
                 <h1 style={{color: "blue"}}>Business, Marketing and Management</h1>
                    <ListGroup>
                         <ListGroup.Item action>Digital Marketing Manager</ListGroup.Item>
                         <ListGroup.Item action>Sports Marketing Executive</ListGroup.Item>
                     </ListGroup>
            </Container>
        
       );
    }

    else {

   //this is the actual career page template
    return (
        <Fragment>
        <div className="careerheader">
        <center><h1>{careername}</h1></center>
    </div>
   
    <div className="careerrow">
        <div className="leftcol">
            <img src={business} alt="171x180" height="180" width="171" className="careerimg"></img>
        </div>
        <div className="rightcol">
            <h3>What does an Environmental engineer do?</h3>
            <p>Apply or release chemical solutions or toxic gases and set traps 
                to kill or remove pests and vermin that infest buildings and surrounding areas.</p>
                <h5>Also known as:</h5>
<span>Residential Pest Control Technician, Certified Pest Control Technician, Termite Technician, 
    Commercial Pest Control Technician, Pest Technician, 
    Pest Control Technician, Pest Control Operator, Pest Control Chemical Technician, Pest Control Applicator, Exterminator</span>
        </div>
    </div>
   
    <div className="careerrow">
        <div className="leftcol">
        <h3>Salary</h3>
            <p>Annual wages for Pest Control Workers in United States</p>
                <table>
                    <tr>
                        <td><b>Location</b></td>
                        <td><b>United States</b></td>
                    </tr>
                    <tr>
                        <td><b>10%</b></td>
                        <td>$23230</td>
                    </tr>
                    <tr>
                        <td><b>10%</b></td>
                        <td>$23230</td>
                    </tr>
                    <tr>
                        <td><b>10%</b></td>
                        <td>$23230</td>
                    </tr>
                    <tr>
                        <td><b>10%</b></td>
                        <td>$23230</td>
                    </tr>
                    <tr>
                        <td><b>10%</b></td>
                        <td>$23230</td>
                    </tr>
                </table>
        </div>
        <div className="rightcol">
            <h3>Watch a Video</h3>
        <iframe src="http://www.careeronestop.org/videos/Careeronestop-videos-content.aspx?videocode=37202100" width="500" height="300" frameborder="0" scrolling="no" allowfullscreen/>
        </div>
        </div>
       
        <div className="careerrow">
        <div className="leftcol">
        <h3>Required Education and Experience</h3>
            <p>People starting in this career usually have:</p>
 <ol>
     <li>High school diploma or equivalent</li>
     <li>No work experience</li>
     <li>1 to 12 months on-the-job training</li>
     </ol>
               
        </div>
        <div className="rightcol">
            <h3>Activities you might do in a day</h3>
            <ol>
                <li>Document work hours or activities.</li>
                <li>Inspect buildings or grounds to determine condition.</li>
                <li>Recommend products or services to customers.</li>
                <li>Treat greenery or surfaces with protective substances.</li>
                <li>Clean facilities or sites.</li>
                <li>Drive trucks or other vehicles to or at work sites.</li>
                <li>Estimate maintenance service requirements or costs.</li>
                <li>Evaluate reports or designs to determine work needs.</li>
                <li>Treat facilities to eliminate pests.</li>
                <li>Supervise maintenance workers.</li>
            </ol>
        </div>
        </div>

        <div className="careerrow">
        <div className="leftcol">
        <h3>Required Knowlegde</h3>
            <p>People in this career often know a lot about:</p>
 <ol>
     <li>Customer and Personal Service - Knowledge of principles and processes for providing 
         customer and personal services. This includes customer needs assessment, 
         meeting quality standards for services, and evaluation of customer satisfaction.</li>
     </ol>
               
        </div>
        <div className="rightcol">
            <h3>Required Skills</h3>
            <p>People in this career often have these skills:</p>
            <ol id="activities">
                <li>Critical Thinking - Thinking about the pros and cons of different ways to solve a problem.</li>
                <li>Active Listening - Listening to others, not interrupting, and asking good questions.</li>
                <li>Monitoring - Keeping track of how well people and/or groups are doing in order to make improvements.</li>
                <li>Writing - Writing things for co-workers or customers.</li>
                <li>Speaking - Talking to others.</li>
                <li>Time Management - Managing your time and the time of other people.</li>
                <li>Social Perceptiveness - Understanding people's reactions.</li>
            </ol>
        </div>
        </div>

        <div className="careerrow">
        <div className="leftcol">
        <h3>Required Abilities</h3>
            <p>People in this career often have talent in:</p>
 <ol>
     <li>Near Vision - Seeing details up close.</li>
<li>Oral Expression - Communicating by speaking.</li>
                <li>Oral Comprehension - Listening and understanding what people say.</li>
                <li>Speech Clarity - Speaking clearly.</li>
                <li>Written Expression - Communicating by writing.</li>
                <li>Deductive Reasoning - Using rules to solve problems.</li>
                <li>Speech Recognition - Recognizing spoken words.</li>
                <li>Problem Sensitivity - Noticing when problems happen.</li>
                <li>Far Vision - Seeing details that are far away.</li>
                <li>Inductive Reasoning - Making general rules or coming up with answers from lots of detailed information.</li>
     </ol>
               
        </div>
        <div className="rightcol">
            <h3>Related Occupations</h3>
            <ol id="activities">
                <li><a href="">First-Line Supervisors of Landscaping, Lawn Service, and Groundskeeping Workers</a></li>
                <li><a href="">Explosives Workers, Ordnance Handling Experts, and Blasters</a></li>
                <li><a href="">Automotive Glass Installers and Repairers</a></li>
                <li><a href="">Locksmiths and Safe Repairers</a></li>
                <li><a href="">Animal Control Workers</a></li>
                <li><a href="">Hazardous Materials Removal Workers</a></li>
                <li><a href="">Non-Destructive Testing Specialists</a></li>
                <li><a href="">Tree Trimmers and Pruners</a></li>
                <li><a href="">Pesticide Handlers, Sprayers, and Applicators, Vegetation</a></li>
                <li><a href="">Forest and Conservation Workers</a></li>
            </ol>
        </div>
        </div>
    </Fragment>  
            
          
        ); 
    }
}



export default Careerpage;
