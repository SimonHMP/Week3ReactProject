import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Boxes from "./components/Boxes";
import Fetcher from "./components/Fetcher";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="HorizontalScroller">
          <Fetcher />
        </div>
        <div></div>
      </header>
    </div>
  );
}

export default App;
