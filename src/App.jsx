import React, { Component } from "react";
import Home from "./home";
import NavBar from "./navBar";

class App extends Component {
  render() {

    return (
      <div className="App">
        <NavBar/>
        <div className="content">
          <Home/>
        
        </div>
      </div>
    );
  }
}

export default App;
