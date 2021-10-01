import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../assets/scss/main.scss";
import Header from "./Header";
import MainSlider from "./MainSlider";
import Test from "./Test";



const App = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
          <Route exact path="/">
              <MainSlider/>
          </Route>
          <Route path="/test">
              <Test/>
          </Route>
      </Switch>
    </Router>
  );
};
export default App;
