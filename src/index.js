import React from "react";
import ReactDOM from "react-dom";
import { FormProvider } from "./lib/store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>,
  rootElement
);
