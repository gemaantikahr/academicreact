import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Cslecture from '../../component/clecture/Clecture';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Lecture extends Component{
    state = {
        lectures_data : [],
        formlecture : [
            {
                id:'',
                lecture_id : '',
                lecture_name : '',
                lecture_email : ''
            }
        ],
        required : [
{
                id:'',
                lecture_id : '',
                lecture_name : '',
                lecture_email : ''
            }
        ]
    }
    
    componentDidMount(){
        this.getlecturedata();
    }
    getlecturedata = ()=>{
        axios.get('http://localhost:3009/lectures').then((res)=>{
            this.setState({
                lectures_data : res.data
            })
        })
    }
    
    fillingformlecture = (data) =>{
        let newlecture = {...this.state.formlecture};
        let id = new Date().getTime();
        newlecture['id'] = id;
        newlecture[data.target.name] = data.target.value;
        this.setState({
            formlecture : newlecture
        })
    }

    savelecture = () =>{
        if(this.state.required.lecture_name === this.state.formlecture.lecture_name){
            console.log("not changet");
        }else{
            axios.post('http://localhost:3009/lectures', this.state.formlecture).then((res)=>{
                this.getlecturedata();
            })
        }
    }

    updatelecture = (data) =>{
        console.log(data);
    }

    deletedata = (id) =>{
        axios.delete(`http://localhost:3009/lectures/${id}`).then((res)=>{
            this.getlecturedata();
        })
    }
    
    render() {
        return (
            <Fragment>
                <Container>
                    <Table bordered>
                        <thead>
                            <tr>
                            <th>Lecture Code</th>
                            <th>Lecture Name</th>
                            <th>Lecture Email</th>
                            <th>-</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Form.Control type="text" placeholder="Enter code" name="nip" onChange={this.fillingformlecture}/></td>
                                <td><Form.Control type="text" placeholder="Enter name" name="lecture_name" onChange={this.fillingformlecture}/></td>
                                <td><Form.Control type="email" placeholder="Enter email" name="lecture_email" onChange={this.fillingformlecture}/></td>
                                <td><Button onClick={this.savelecture}>Save</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
                {
                    this.state.lectures_data.map(lectures_data=>{
                        return <Cslecture key={lectures_data.nip} data={lectures_data} delete={this.deletedata} update={this.updatelecture}/>
                    })
                }
            </Fragment>

        );
    }
}
export default Lecture;