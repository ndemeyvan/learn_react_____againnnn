import React, { Component } from "react";
import Home from "./home";
import NavBar from "./navBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./create";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <CreateBlog />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
