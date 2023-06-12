import React, { Component } from "react";

export class User extends Component {
  render() {
    const { ud, divKey } = this.props;
    return (
      <div key={divKey} id={divKey} className="mt-2 mb-2">
        {ud} &nbsp;{" "}
        <button onClick={() => this.props.dor(ud)} className="btn btn-outline-danger">DeleteUser</button>
      </div>
    );
  }
}
