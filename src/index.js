import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import { BrowserRouter } from "react-router-dom";
import Routes from "./client/Routes/routes";
import "typeface-roboto";
import "normalize.css";

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
