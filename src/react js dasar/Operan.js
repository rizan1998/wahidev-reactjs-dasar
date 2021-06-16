import React, { Component } from "react";

export default class Operan extends Component {
  render() {
    const { makanan, gantiMakanan } = this.props;
    return (
      <div>
        <h2>Operan State Yang menjadi Props : {makanan}</h2>
        <button onClick={() => gantiMakanan("Soto")}>Ganti makanan dari component operan</button>
      </div>
    );
  }
}
