import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Ccourse = (props) =>{
    console.log(props.data);
    return(
        <>
        <div>
        <Container>
            <Row>
                <Col xs={3}>
                    {props.data.course_id}
                </Col>
                <Col xs={3}>
                    {props.data.course_name}
                </Col>
                <Col xs={3}>
                    {props.data.course_credit}
                </Col>
                <Col xs={2}>
                    {props.data.course_semester}
                </Col>
                <Col xs={1}>
                <Button variant="danger" size="sm" onClick={()=>props.delete(props.data.id)}>D</Button>
                <Button variant="primary" size="sm">U</Button>
                </Col>
            </Row>
            {
                <hr>
                </hr>
            }
        </Container>
        </div>
        </>
    );
}

export default Ccourse;