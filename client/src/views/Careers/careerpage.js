
import ListGroup from 'react-bootstrap/ListGroup'
import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container'
import Figure from 'react-bootstrap/Figure'

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
        <Figure>
            <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="holder.js/171x180"
            />
            <Figure.Caption>
                {careername}
            </Figure.Caption>
        </Figure>
        ); 
    }
}



export default Careerpage;
