import React, { Component } from "react";
import { Button } from "reactstrap";
import { Container, Col, Row } from "reactstrap";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";

class App extends Component {
  state = { seciliSıcaklık: Number("") };

  sıcaklıkArttır = () => {
    this.setState({
      seciliSıcaklık: this.state.seciliSıcaklık + 1,
    });
  };

  sıcaklıkAzalt = () => {
    this.setState({
      seciliSıcaklık: this.state.seciliSıcaklık - 1,
    });
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1>HAVA NASIL?</h1>
          </Row>
          <Row>
            <Col xs="6">
              <br></br>
              <h3>Şuan sıcaklık {this.state.seciliSıcaklık} derecedir.</h3>
            </Col>
            <Col xs="3">
              <br></br>
              <Button onClick={() => this.sıcaklıkArttır()} color="success">
                Sıcaklığı Arttır
              </Button>
            </Col>
            <Col xs="3">
              <br></br>
              <Button onClick={() => this.sıcaklıkAzalt()} color="success">
                Sıcaklığı Azalt
              </Button>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs="4">
              <Celcius seciliSıcaklık={this.state.seciliSıcaklık} />
            </Col>
            <Col xs="4">
              <Fahrenheit seciliSıcaklık={this.state.seciliSıcaklık} />
            </Col>
            <Col xs="4">
              <Kelvin seciliSıcaklık={this.state.seciliSıcaklık} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
