import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";



export default function Screen() {

    const result = useSelector((state) => state.result.value)
    let operation = useSelector((state) => state.result.operation)

    return (

        <Container className="border border-primary rounded-pill">
            <Row>
                
                <Col sm={12}>
                <div className="text-center fw-bold">
                    {operation}
                </div>
                </Col>
                
                <Col>
                <div className="text-center">
                    {result}
                </div>
                </Col>
            </Row>
        </Container>

    )
}