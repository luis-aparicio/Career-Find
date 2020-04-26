import React ,{useState, useContext} from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { globalState } from "../../state/globalState";
import './classrom.css';



function Classroom() {

    const [classroomview,setClassroomview] = useState(false);
    const globalStateVars = React.useContext(globalState);
    

    
    const toTable = async () => {
        setClassroomview(true);
    }

    const toUpdate = async () => {
        setClassroomview(false);
    }




if (classroomview === false && globalStateVars.state.isAdmin){
    return (
        <div className="text1">
            <Container>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Career Name/Code"
                    aria-label="Career Name/Codes"
                    aria-describedby="basic-addon2"
                    
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary" className="butn">Set</Button>
                    </InputGroup.Append>
                </InputGroup>
    
                <InputGroup >
                    <InputGroup.Prepend>
                    <InputGroup.Text className="label1">Description</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text className="label1">Salary</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text className="label1">Video Link</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text className="label1">Experience</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text className="label1">Activities</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text className="label1">Knowledge</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text className="label1">Required Skills</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text className="label1">Required Abilities</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text className="label1">Related</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
            </Container>
    
            
             
                        <Button type="submit" className="button1">
                                Update
                        </Button>
                        <br></br> 
                        <Button variant="primary" size="sm" onClick = {() => toTable()} className="button3">
                        Switch to Class List
                        </Button>
                  
        </div> 
        );
} else if(globalStateVars.state.isAdmin)
    let studentarray = globalStateVars.state.studentarray;
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
                <Button type="submit" onClick = {()=> newStudent()}>
                        New Student
                </Button>
                            
                <Button variant="primary" size="sm" onClick = {() => toUpdate()}>
                        Switch to Update Page
                </Button>
            </Row>    

    </div> 
    );



}

export default Classroom;
