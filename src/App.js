import './App.css';
import Screen from './Components/screen';
import { Container, Row, Col } from 'react-bootstrap';
import Pads from './Components/pads';

function App() {
  return (
    <div>
    <Container id="container-app">
      <Row>
        <Col >
          <h1 className="text-center">El Calculator</h1>
        </Col>
      </Row>
      <Row>
        <Col><Screen /></Col>
      </Row>
      <Row>
        <Col>
          <Pads />
        </Col>
      </Row>
    </Container>
    
   </div>
  );
}

export default App;
