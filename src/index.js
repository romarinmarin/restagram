import React from "react";
import ReactDOM from "react-dom";

// import react router
import { BrowserRouter, Route } from "react-router-dom";

import "./style/index.css";
import Main from "./components/Main";

const App = () => (
  <BrowserRouter>
    <div className="sans-serif">
      <Route path="/" component={Main} />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("root"));
