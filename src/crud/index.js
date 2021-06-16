import React, { Component } from "react";
import NavbarComponent from "./NavbarComponent";

export default class index extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <div class="container">
          <div class="mt-4">
            <h2>Hellow World!</h2>
          </div>
        </div>
      </div>
    );
  }
}
