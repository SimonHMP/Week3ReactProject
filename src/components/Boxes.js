import React, { Component } from "react";

export default class Boxes extends Component {
  render() {
    return (
      <div className="articleBox">
        <div>
          Title: {this.props.title}
          <span> &nbsp; </span> Author: {this.props.author}
          <span> &nbsp; </span>
          {this.props.thumbnail}
        </div>
      </div>
    );
  }
}
