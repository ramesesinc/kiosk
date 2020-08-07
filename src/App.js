import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import HomeScreen from "./app/HomeScreen";
import ModuleScreen from "./app/ModuleScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route name="home" exact path="/" component={HomeScreen} />
        <Route name="module" path="/module" component={ModuleScreen} />
      </Switch>
    </Router>
  );
}

export default App;
