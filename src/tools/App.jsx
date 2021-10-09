import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../assets/scss/main.scss";
import Account from "./Account";
import Header from "./Header";
import MainSlider from "./MainSlider";
// import Test from "./Test";




const App = () => {
 
  return (
    <Router>
      <Header></Header>
        <section className="main">
      <Switch>
          <Route exact path="/account">
              <Account/>
          </Route>
      </Switch>
      <Switch>
          <Route exact path="/">
              <MainSlider/>
          </Route>
      </Switch>
        </section>
        
    </Router>
  );
};
export default App;
