import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Calculator extends Component{
    state={
        result : 1,
        first : [{
            xfirst : 0,
        }],
        second : [{
            xsecond : 0,
        }]
    }
    fillform = (data)=>{
        this.state.first[data.target.name] = data.target.value;
        this.state.second[data.target.name] = data.target.value;
        this.setState({
            result : (this.state.first[data.target.name]+this.state.second[data.target.name])
        })
        console.log(this.state.result);
    }
    // calculateplus = ()=>{
    //     this.setState({
    //         result : (data.target)
    //     })
    // }
    render() {
        return (
             <Container>
                 <br/>
                 <Row>
                     <Col xs={12}>
                         <center><h3>Calculator</h3></center>
                     </Col>
                 </Row>
                 <Row>
                     <Col xs={12}>
                        <span>First</span>
                        <Form.Control type="number" name="xfirst" placeholder="" onChange={this.fillform} />
                     </Col>
                 </Row>
                 <br/>
                 <Row>
                     <Col xs={12}>
                        <span>Second</span>                        
                        <Form.Control type="number" name="xsecond" placeholder="" onChange={this.fillform} />
                     </Col>
                 </Row>
                 <br/>
                 <Row>
                     <Col xs={12}>
                        <span>Result</span>                        
                        <Form.Control type="number" value={this.state.result} readOnly/>
                     </Col>
                 </Row>
                 <br/>
                 <Row>
                     <Col xs={3}>
                         <Button variant="primary" onClick={this.calculateplus}>+</Button>
                     </Col>
                     <Col xs={3}>
                         <Button variant="danger">-</Button>
                     </Col>
                     <Col xs={3}>
                         <Button variant="warning">*</Button>
                     </Col>
                     <Col xs={3}>
                         <Button variant="info">/</Button>
                     </Col>
                 </Row>
             </Container>
        );
    }
}

export default Calculator;