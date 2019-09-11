import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const Cschnoor = (props)=>{
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        {props.data.nim}
                    </Col>
                    <Col>
                        {props.data.nama}
                    </Col>
                    <Col>
                        {props.data.jurusan}
                    </Col>
                    <Col>
                        {props.data.tanggallahir}
                    </Col>
                    <Col>
                        {props.data.alamat}
                    </Col>
                    <Col>
                        <Button variant="danger" onClick={()=>props.delete(props.data.nim)}>D</Button>
                        <Button onClick={()=>props.update(props.data)}>U</Button>
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}

export default Cschnoor;
