import React, { Component } from "react";

export default class app extends Component {
  nome = () => {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  };
  soma = () => 5 * 2;
  render() {
    return (
      <div>
        <h2>{this.nome()}</h2>
        <h3>{this.soma()}</h3>
      </div>
    );
  }
}
