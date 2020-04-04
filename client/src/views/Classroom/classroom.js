import React ,{useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'




function Classroom() {

    const [classroomview,setClassroomview] = useState(false);
    

    
    const toTable = async () => {
        setClassroomview(true);
    }

    const toUpdate = async () => {
        setClassroomview(false);
    }




if (classroomview === false){
    return (
        <div>
            <Container>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Career Name/Code"
                    aria-label="Career Name/Codes"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary">Set</Button>
                    </InputGroup.Append>
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text>Description</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text>Salary</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text>Video Link</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text>Experience</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text>Activities</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text>Knowledge</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text>Required Skills</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text>Required Abilities</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
    
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text>Related</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
            </Container>
    
            
                <Row>
                        <Button type="submit" >
                                Update
                        </Button>
                        
                        <Button variant="primary" size="sm" onClick = {() => toTable()}>
                        Switch to Class List
                        </Button>
                </Row>         
        </div> 
        );
}
    return (
    <div>

        <Container>
               <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
        </Container>

            <Row>
                <Button type="submit" >
                        Update
                </Button>
                            
                <Button variant="primary" size="sm" onClick = {() => toUpdate()}>
                        Switch to Update Page
                </Button>
            </Row>    

    </div> 
    );



}

export default Classroom;
