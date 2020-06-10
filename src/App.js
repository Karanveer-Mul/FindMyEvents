import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Events from "./components/events/events";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Find My Events" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Events} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
