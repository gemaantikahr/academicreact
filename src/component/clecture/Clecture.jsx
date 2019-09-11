import React from 'react';
import Container from 'react-bootstrap/Container';
import './Clecture.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Clecture = (props) =>{
    return(
        <>
        <Container>
            <Row>
                <Col xs={2}>
                    {props.data.nip}
                </Col>
                <Col xs={4}>
                    {props.data.lecture_name}
                </Col>
                <Col xs={4}>
                    {props.data.lecture_email}
                </Col>
                <Col xs={2}>
                <Button variant="danger" size="sm" onClick={()=>props.delete(props.data.id)}>D</Button>
                <Button variant="primary" size="sm" onClick={()=>props.update(props.data.id)}>U</Button>
                </Col>
            </Row>
            {
                <hr>
                </hr>
            }
        </Container>
        </>
    )
}

export default Clecture;