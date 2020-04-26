import React ,{useState, useContext} from 'react';
import FormGroup from 'react-bootstrap/FormGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { globalState } from "../../state/globalState";
import './classrom.css';
import NewStudent from '../../components/NewStudent/NewStudent';
import axios from 'axios';



function Classroom() {

    const [classroomview,setClassroomview] = useState(false);
    const [careerInput, setCareerInput] = useState({});
    const globalStateVars = React.useContext(globalState);
    const [createNewStudent, setCreateNewStudent] = useState(false);
    

    
    const toTable = async () => {
        setClassroomview(true);
    }

    const toUpdate = async () => {
        setClassroomview(false);
    }


    const submitCareer = async(event) => {

        event.preventDefault();
        let careerPayload = {
            OnetCode: careerInput.Code,
            OnetDescription: careerInput.Description
        };
        let career = await axios.post('/api/career/career/new', careerPayload);
            console.log("Success!");
        toTable();
    }
    const handleChange = (event) => {
        event.persist();
        setCareerInput(careerInput => ({...careerInput, [event.target.name]: event.target.value}));
    };

    

if (classroomview === false && globalStateVars.state.isAdmin){
    return (
        <div className="text1">
            <Container>
            <Form onSubmit={submitCareer} onChange={handleChange}>

                <Form.Group controlId="formCode">
                            <Form.Label className="lab">Enter Career Code:</Form.Label>
                            <Form.Control
                                name="Code"
                                type="text"
                                placeholder="Career Name/Code"/>
                        </Form.Group>
    
                <FormGroup >
                    <Form.Label className="label1">Description</Form.Label>
                    <FormControl type="text"  name="Description"  />
                </FormGroup>
                </Form>
            </Container>
    
            
             
                        <Button type="submit" className="button1" onClick = {() => submitCareer()} >
                                Update
                        </Button>
                        <br></br> 
                        <Button variant="primary" size="sm" onClick = {() => toTable()} className="button3">
                        Switch to Class List
                        </Button>
                  
        </div> 
        );
} else if(globalStateVars.state.isAdmin){
    let studentarray = globalStateVars.state.students;
    console.log('studentarry = ' + studentarray)
    if(studentarray === undefined || studentarray === null)
        studentarray=[];
    return (
    <div>

    <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                {studentarray.map(student =>  
                    <tr>
                    <td>{student.username}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </Container>

            <Row>
                <Button type="submit" onClick = {()=> setCreateNewStudent(true)}>
                        New Student
                </Button>
                            
                <Button variant="primary" size="sm" onClick = {() => toUpdate()}>
                        Switch to Update Page
                </Button>
            </Row>  
        <Container>
            <div>
                <NewStudent showNew= {createNewStudent}
                   setShowNew={setCreateNewStudent} />
            </div>
        </Container>  

    </div> 
    );

                }

}

export default Classroom;
