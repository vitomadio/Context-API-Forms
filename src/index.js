import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  rootElement
);
