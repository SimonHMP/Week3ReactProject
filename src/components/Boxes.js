import React, { Component } from "react";

export default class Boxes extends Component {
  render() {
    return (
      <div className="articleBox">
        <img src={this.props.link} />
      </div>
    );
  }
}
