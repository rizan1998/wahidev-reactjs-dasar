import React, { Component } from "react";
import FormulirComponents from "./FormulirComponents";
import NavbarComponent from "./NavbarComponent";
import TableComponents from "./TableComponents";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  //handle change
  handleChange = (event) => {
    this.setState({
      //maksud target name disini adalah nama propery state dan valuenya
      [event.target.name]: event.target.value,
    });
  };

  //handle submit
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <div class="container">
          <div class="mt-4">
            <h2>Hellow World!</h2>
          </div>
          <TableComponents />
          <FormulirComponents {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
