import React, { Component } from "react";
import "./boxes.css";

export default class Boxes extends Component {
  state = {
    numLikes: 0
  };

  increment = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    });
  };

  render() {
    return (
      <div className="articleBox">
        <img src="https://gem-a.com/images/Careers/Sample_latestcover.png"></img>
        <div className="likeBtn">
          <button onClick={this.increment}>Like</button>
        </div>
        This article has <b>{this.state.numLikes}</b> likes!
      </div>
    );
  }
}
