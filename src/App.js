import React, { Component } from "react";
import "./App.css";

import Fetcher from "./components/Fetcher";
import { Route } from "react-router-dom";

export default class App extends Component {
  state = { reload: false };
  newArticles = () => {
    this.setState({
      reload: true
    });
  };
  done = () => {
    this.setState({
      reload: false
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <button onClick={this.newArticles} className="buttoner">
              Click me
            </button>
          </div>
          <div className="HorizontalScroller">
            <Route
              exact
              path="/"
              component={() => (
                <Fetcher test={this.state.reload} done={this.done} />
              )}
            />
            {/* <Route  path="/article/:id" component={DetailImg} /> */}
          </div>
          <div></div>
        </header>
      </div>
    );
  }
}
