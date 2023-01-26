//region Imports
import React from "react";
import logo from "./resources/logo.svg";
import "./App.css";
import * as Components from "./components";
//endregion

function App() {
  return (
    <div className="App">
      <Components.Background/>
      <Components.Menu/>
    </div>
  );
}

export default App;
