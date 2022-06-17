import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import { App } from "./App";
import "./index.css";
import scrollRefReducer from "./Reducers/scrollRefReducer";
// const store = createStore(scrollRefReducer, devToolsEnhancer());

ReactDom.render(
  // <Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider>,
  document.getElementById("root")
);
