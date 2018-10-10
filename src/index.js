import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import UserApi from "./UserApi.js";
import { getUsers } from "./action/Actions.js";
import Routes from "./Routes.js";
import store from "./store/store.js";
import { Provider } from "react-redux";
import Api from './Api.js';
// Import bootstrap css
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
