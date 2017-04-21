import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import music from "./reducers";
import App from "./App";
import "./index.css";

let store = createStore(music);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById("root")
);
