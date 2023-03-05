import React, { Component } from "react";
import { Button } from "reactstrap";

class Fahrenheit extends Component {
  state = { gelenSıcaklık: Number("") };
  sıcaklıkDegistir = () => {
    this.setState({
      gelenSıcaklık: this.props.seciliSıcaklık * 1.8 + 32,
    });
  };
  render() {
    return (
      <div>
        <h4>FAHRENHEIT</h4>
        <h5>Sıcaklık: {this.state.gelenSıcaklık}</h5>
        <Button onClick={() => this.sıcaklıkDegistir()} color="success">
          Hesapla
        </Button>
      </div>
    );
  }
}

export default Fahrenheit;
