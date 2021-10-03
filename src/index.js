import React from "react";
import ReactDOM from "react-dom";

import App from "./tools/App";
import store from "./redux/store";
import { Provider } from "react-redux";


const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.render(
    <Provider store={store}>
      <App  />
    </Provider>,
    rootElement
  );
}
