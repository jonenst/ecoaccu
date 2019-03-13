import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import 'react-circular-progressbar/dist/styles.css';
import CircularProgressbar from 'react-circular-progressbar';
import { Bar as BarChart } from 'react-chartjs';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      dates: []
    };
  }

  componentDidMount() {
    //fetch("https://api.electricitymap.org/v3/marginal-carbon-intensity/forecast?zone=FR", { headers: { "auth-token": "XXXXXXXXX" } } )
    fetch("http://le-simplex.mooo.com:54321/")
      .then(res => res.json())
      .then(
        (result) => {
        console.log(result.forecast.map(x => x.marginalCarbonIntensity));
          this.setState({
            isLoaded: true,
            items: result.forecast.map(x => x.marginalCarbonIntensity),
            dates: result.forecast.map(x => new Date(x.datetime).getHours()+"h")
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

        function rand(min, max, num) {
          var rtn = [];
          while (rtn.length < num) {
            rtn.push((Math.random() * (max - min)) + min);
          }
          return rtn;
        }

    var labels = [];
    for (var i=0;i<24;i++) {
      labels.push((18+i)%24+"h");
    }
    
    var data;
    var dates;
    if (this.state.isLoaded && !this.state.error) {
      data = this.state.items;
      dates = this.state.dates;
    } else {
      data = [80,70,60,58,55,53,50,48,37,35,35,34,
              34,34,40,46,50,55,60,63,69,72,83,85];
      dates = labels;
    }

    var chargelength = 5;
    var idx;
    var min=1e9;
    for (var i = 2; i<22; i++) {
      var tmpsum =0
      if (dates[i+2] == "8h") {
        break;
      }
      for (var j = -2; j<2; j++) {
        tmpsum = tmpsum + data[i+j];
      }
      if (min > tmpsum) {
        min = tmpsum;
        idx = i;
      }
    }
    var chargestart = idx;
    console.log(chargestart);
    var fillColor = [];
    var strokeColor = [];
    for (var i=0;i<24;i++) {
      if (i < chargestart || i > chargestart + chargelength) {
        fillColor.push("rgba(151,187,205,0.2)");
        strokeColor.push("rgba(151,187,205,1)");
      } else {
        fillColor.push("rgba(0,200,0),0.2)");
        strokeColor.push("rgba(0,200,0,1)");
      }
    }
    let chartData = 
{
            labels: dates,
            datasets: [
                {
                    fillColor: fillColor ,
                    strokeColor: strokeColor,
                    data: data
                }
            ]
          }
;
    let chartOptions = {
  barValueSpacing : 0,
  barDatasetSpacing : 1,
scaleShowGridLines : false,
    }

    return (
      <Container className="text-center">
        <Row>
          <Col>
            Charge
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mx-auto" style={{ width: '100px' }}>
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
        <Row>
          <Col>
            <BarChart data={chartData} options={chartOptions} width="600" height="250"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
