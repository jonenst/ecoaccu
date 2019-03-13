import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import 'react-circular-progressbar/dist/styles.css';
import CircularProgressbar from 'react-circular-progressbar';

class App extends Component {

  render() {
    let chartData = [
          {
              value: 72,
              color: "#FDB45C",
              highlight: "#FFC870",
              label: "Yellow"
          },
          {
              value: 28,
              color: "#949FB1",
              highlight: "#A8B3C5",
              label: "Grey"
          }
          ]
;
    return (
      <Container className="text-center">
        <Row>
          <Col>
            Charge
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="mx-auto" style={{ width: '100px' }}>
              <CircularProgressbar percentage={73} text="73%" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                Chargee dans
              </Col>
            </Row>
            <Row>
              <Col>
                4h42
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                CO2 restant
              </Col>
            </Row>
            <Row>
              <Col>
                20g (-60g)
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                Cout restant
              </Col>
            </Row>
            <Row>
              <Col>
                2.35e
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
