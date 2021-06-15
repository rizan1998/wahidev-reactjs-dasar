import React, { Component } from "react";
import Sublifecycle from "./Sublifecycle";

export default class Lifecycle extends Component {
  //rconst
  constructor(props) {
    super(props);

    this.state = {
      makanan: "Bakso",
      data: {},
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log("hallo : ", json);
        this.setState({
          data: json,
          tampilHalamanSub: false,
        });
      });
  }
  ubahMakanan(value) {
    this.setState({
      makanan: value,
    });
  }

  render() {
    console.log("data in render :", this.state.data);
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        {this.state.data.title}
        <p>Sublifecycle</p>
        {this.state.tampilHalamanSub && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />}
        <button onClick={() => this.setState({ tampilHalamanSub: !this.state.tampilHalamanSub })}>Tampilkan component Sublifecycle</button>
      </div>
    );
  }
}
