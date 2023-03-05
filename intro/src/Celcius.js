import React, { Component } from "react";
import { Button } from "reactstrap";

class Celcius extends Component {
  render() {
    return (
      <div>
        <h4>CELSIUS</h4>
        <h5>Sıcaklık: {this.props.seciliSıcaklık}</h5>
      </div>
    );
  }
}

export default Celcius;
