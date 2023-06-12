import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  decrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    return (
      <div>
        <div>curent count: {this.state.count}</div>
        <div>
          <button onClick={this.increment}>+</button>&nbsp;&nbsp;
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}
