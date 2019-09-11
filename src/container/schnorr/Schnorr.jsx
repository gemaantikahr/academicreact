import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React, { Component, Fragment} from 'react';
import Axios from 'axios';
import Cschnorr from '../../component/cschnorr/Cschnorr';
class Schnorr extends Component{
    state = {
        schnorr : [],
    }

    getdataschnorr = () =>{
        Axios.get('http://localhost:8000/student').then((res)=>{
            this.setState({
                schnorr : res.data.values,
            })
        })
    }

    componentDidMount(){
        this.getdataschnorr();
    }

    deletedata=(data)=>{
        Axios.delete(`http://localhost:8000/student/${data}`).then((res)=>{
            this.getdataschnorr();
        })
    }

    updatedata = (data)=>{
        console.log(data);
    }

    render() {
        return (
                <Fragment>
                                <Container>
                    <Row>
                        <Col>
                            Nim
                        </Col>
                        <Col>
                            Nama
                        </Col>
                        <Col>
                            Jurusan
                        </Col>
                        <Col>
                            Tanggal lahir
                        </Col>
                        <Col>
                            Alamat
                        </Col>
                        <Col>
                            Option
                        </Col>
                    </Row>
                </Container>
                {
                    this.state.schnorr.map(schnorr=>{
                        return <Cschnorr key={schnorr.nim} data={schnorr} delete={this.deletedata} update={this.updatedata}/>
                    })
                }
            </Fragment>
        );
    }

}

export default Schnorr;