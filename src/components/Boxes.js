import React, { Component } from "react";
import "./boxes.css";

export default class Boxes extends Component {
  goToUrl = () => {
    console.log("", window);
    window.location.replace(this.props.link);

    //this.props.history.push("/breeds");
  };
  render() {
    //console.log("this.props", this.props);

    return (
      <div className="articleBox">
        <div>Title: {this.props.title}</div>
        <div>Author: {this.props.author}</div>

        <img
          className="componentImage"
          src={this.props.src}
          onClick={this.goToUrl}
          link={this.props.link}
        />
      </div>
    );
  }
}

//this.props.link
