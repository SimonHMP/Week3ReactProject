import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Boxes from "./components/Boxes";
import Fetcher from "./components/Fetcher";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="boxes">
          <Boxes id="box1" />
          <Boxes id="box2" />
          <Boxes id="box3" />
        </div>

        <div>
          <Fetcher />
        </div>
      </header>
    </div>
  );
}

export default App;
