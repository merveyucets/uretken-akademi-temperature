import React, { Component } from "react";
import { Button } from "reactstrap";

class Kelvin extends Component {
  state = { gelenSıcaklık: Number("") };
  sıcaklıkDegistir = () => {
    this.setState({
      gelenSıcaklık: this.props.seciliSıcaklık + 273.15,
    });
  };
  render() {
    return (
      <div>
        <h4>KELVIN</h4>
        <h5>Sıcaklık: {this.state.gelenSıcaklık}</h5>
        <Button onClick={() => this.sıcaklıkDegistir()} color="success">
          Hesapla
        </Button>
      </div>
    );
  }
}

export default Kelvin;
