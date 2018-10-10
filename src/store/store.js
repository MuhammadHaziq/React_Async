import React, { Component } from "react";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "../reducer/Reducers.js";

const store = createStore(Reducer, applyMiddleware(thunk));

export default store;
