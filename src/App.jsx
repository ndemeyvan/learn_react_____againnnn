import React, { Component } from "react";
import Home from "./home";
import NavBar from "./navBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./create";
import BlogDetail from "./BlogDetail";
import NotFound from "./NotFound";

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
              <Route path="/blogs/:id">
                <BlogDetail />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
