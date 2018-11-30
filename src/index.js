import React from "react";
import ReactDOM from "react-dom";

// import react router
import { BrowserRouter, Route } from "react-router-dom";

import "./style/index.css";
// import App from "./components/App";
import { Provider } from "react-redux";
import store, { history } from "./store";
import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
