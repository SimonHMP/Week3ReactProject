import React, { Component } from "react";
import "./boxes.css";

export default class Boxes extends Component {
  render() {
    return (
      <div className="articleBox">
        Title: {this.props.title}
        <span> &nbsp; </span> Author: {this.props.author}
        <span> &nbsp; </span>
        <img className="componentImage" src={this.props.src} />
      </div>
    );
  }
}
