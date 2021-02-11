import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import App from "./App";
import Login from "./page/Login";
import Daftar from "./page/Daftar";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <App {...props} />} />
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route path="/daftar" exact render={(props) => <Daftar {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("main")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
