import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./assets/css/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
