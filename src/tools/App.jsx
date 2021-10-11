import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import productSliderData from "../assets/data/productSlider";
import "../assets/scss/main.scss";
import Account from "./Account";
import Header from "./Header";
import MainSlider from "./MainSlider";
// import Test from "./Test";
import ProductSlider from "./sliders/ProductSlider";




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
              <ProductSlider data={productSliderData}/>
          </Route>
      </Switch>
        </section>
        
    </Router>
  );
};
export default App;
