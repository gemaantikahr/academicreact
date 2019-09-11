import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Cstudent = (props)=>{
    return(
        <>
        <Row>
            <Col xs={2}>
                {props.data.student_id}
            </Col>
            <Col xs={4}>
                {props.data.student_name}
            </Col>
            <Col xs={4}>
                {props.data.student_email}
            </Col>
            <Col xs={2}>
            <Button variant="danger" size="sm" onClick={()=>props.delete(props.data.id)}>D</Button>
            <Button variant="primary" size="sm" onClick={()=>props.update(props.data)}>U</Button>
            </Col>
        </Row>
        </>
    )
}

export default Cstudent;