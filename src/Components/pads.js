import { Container, Row, Col, Button, ButtonGroup  } from "react-bootstrap";


export default function Pads() {

    return(
        <Container>
            <br />
            <Row className="p-1">
                <Col >
                <ButtonGroup className="d-flex gap-2">
                    <Button className="btn btn-primary rounded" id="seven">7</Button>
                    <Button className="btn btn-primary rounded" id="eigth">8</Button>
                    <Button className="btn btn-primary rounded" id="nine">9</Button>
                </ButtonGroup>
                </Col>
            </Row>
       
            <Row className="p-1">
                <Col>
                <ButtonGroup className="d-flex gap-2">
                    <Button className="btn btn-primary rounded" id="four" >4</Button>
                <Button className="btn btn-primary rounded" id="five">5</Button>
                <Button className="btn btn-primary rounded" id="six">6</Button></ButtonGroup></Col>
            </Row>
            <Row className="p-1">
                <Col>
                <ButtonGroup className="d-flex gap-2">
                <Button className="btn btn-primary rounded" id="one">1</Button>
                <Button className="btn btn-primary rounded" id="two">2</Button>
                <Button className="btn btn-primary rounded" id="three">3</Button>
                </ButtonGroup>
                </Col>
            </Row>
            <Row className="p-1">
            <Col>
            <ButtonGroup className="d-flex gap-2">
                <Button className="btn btn-primary" id="zero">0</Button>
                <Button className="btn btn-primary" id="decimal">.</Button>
            </ButtonGroup>    
            </Col>
            </Row>
        </Container>
    )
}