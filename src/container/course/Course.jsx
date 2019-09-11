import React, { Component, Fragment} from 'react';
import Ccourse from '../../component/ccourse/Ccourse';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class Course extends Component{
    state = {
        courses_data:[],
        formcourse : [{
            id : '',
            course_id : '',
            course_name : '',
            course_credit : '',
            course_semester : ''
        }]
    }
    // get course data
    getcoursedatafromapi = ()=>{
        axios.get('http://localhost:3009/courses').then((res)=>{
            this.setState({
                courses_data : res.data
            })
        })
    }
    // get course data
    componentDidMount(){
        this.getcoursedatafromapi();
    }
    // get course data

    // delete data from api
    deletecourse = (id) =>{
        axios.delete(`http://localhost:3009/courses/${id}`).then((res)=>{
            this.getcoursedatafromapi();
        })
    }
    // delete data from api
    fillingformcourse = (data) =>{
        let newcoursedata = {...this.state.formcourse};
        let id = new Date().getTime();
        newcoursedata['id'] = id;
        newcoursedata[data.target.name] = data.target.value;
        this.setState({
            formcourse : newcoursedata
        })
    }
    savecourse = () =>{
        axios.post('http://localhost:3009/courses', this.state.formcourse).then((res)=>{
            this.getcoursedatafromapi();
        })
    }
    render() {
        return (
             <Fragment>
                <Container>
                <Table bordered>
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Course Credit</th>
                        <th>Course Semester</th>
                        <th>-</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Form.Control type="email" placeholder="Code.." name="course_id" onChange={this.fillingformcourse} /></td>
                        <td><Form.Control type="email" placeholder="Name.." name="course_name" onChange={this.fillingformcourse} /></td>
                        <td><Form.Control type="email" placeholder="Credit.." name="course_credit" onChange={this.fillingformcourse} /></td>
                        <td><Form.Control type="email" placeholder="Semester.." name="course_semester" onChange={this.fillingformcourse} /></td>
                        <td><Button onClick={this.savecourse}>Save</Button></td>
                    </tr>
                </tbody>
                </Table>
                </Container>
                <Container>
                    <Row>
                        <Col xs={3}>
                            Course Code
                        </Col>
                        <Col xs={3}>
                            Course Name
                        </Col>
                        <Col xs={3}>
                            Credit
                        </Col>
                        <Col xs={2}>
                            Semester
                        </Col>
                        <Col xs={1}>
                            Option
                        </Col>
                    </Row>
                    <hr/>
                </Container>
                 {
                     this.state.courses_data.map(courses_data=>{
                         return <Ccourse key={courses_data.course_id} data={courses_data} delete={this.deletecourse}/>
                     })
                 }
             </Fragment>    
        );
    }
}

export default Course;