import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cstudent from '../../component/cstudent/Cstudent';
import axios from 'axios';

class Student extends Component{
    state={
        students: [],
        formstudent : [
            {
                id : '1',
                student_id : '',
                student_name : '',
                student_email : ''
            }
        ],
        isupdate : false,
        buttonsubmit : "Save"
    }
    //set first time for all function
   componentDidMount(){
       this.getdataapi();
   }
    //set first time for all function
    
    // get api data
    getdataapi = ()=>{
        axios.get('http://localhost:3009/students').then((res)=>{
            this.setState({
                students : res.data,
            })
        })
    }
    // get api data
    
    // when you typeing something in form
    fillingstudentform = (data) =>{
        let newstudent = {...this.state.formstudent};
        let id = new Date().getTime();
        if(!this.state.isupdate){
            newstudent['id'] = id;
        }
        newstudent[data.target.name] = data.target.value;
        this.setState({
            formstudent : newstudent
        })
    }
    // when you typeing something in form
    updatestudentfix = ()=>{
        axios.put(`http://localhost:3009/students/${this.state.formstudent.id}`, this.state.formstudent).then((res)=>{
            console.log(res);
        })
    }
    //save student to api
    addstudents = () =>{
        if(this.state.isupdate){
            this.updatestudentfix();
        }else{
            console.log("hhaha");
            axios.post('http://localhost:3009/students', this.state.formstudent).then((res)=>{
                this.getdataapi();
            })
        }
    }
    //save student to api
    deletedata = (id)=>{
        axios.delete(`http://localhost:3009/students/${id}`).then((res)=>{
            this.getdataapi();
        })
    }

    updatestudent = (data) =>{
        console.log(data);
        this.setState({
            formstudent : data,
            buttonsubmit : "update",
            isupdate: true
        })
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col xs={4}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Student Id</Form.Label>
                                <Form.Control type="text" placeholder="Enter id" value={this.state.formstudent.student_id} name="student_id" onChange={this.fillingstudentform} required/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Student name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" value={this.state.formstudent.student_name} name="student_name" onChange={this.fillingstudentform} required/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Student Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={this.state.formstudent.student_email} name="student_email" onChange={this.fillingstudentform} required/>
                            </Form.Group>
                            <Button variant="primary" onClick={this.addstudents} type="submit">
                                {this.state.buttonsubmit}
                            </Button>
                        </Form>
                        </Col>
                        <Col xs={8}>
                            {/* ini buat title di atas */}
                                <Row>
                                    <Col xs={2}>
                                        Student Id
                                    </Col>
                                    <Col xs={4}>
                                        Student Name
                                    </Col>
                                    <Col xs={4}>
                                        Student Email
                                    </Col>
                                    <Col xs={2}>
                                        Option
                                    </Col>
                                </Row>
                            {/* ini buat title di atas */}
                            <Card body>
                                {
                                    this.state.students.map(students=>{
                                        return <Cstudent key={students.student_id} data={students} delete={this.deletedata} update={this.updatestudent}/>
                                    })
                                }
                            </Card>
                        </Col>
                    </Row>  
                </Container>
            </Fragment>    
        );
    }
}

export default Student;