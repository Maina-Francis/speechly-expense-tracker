import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  <SpeechProvider appId="f90a7634-d642-4a63-8e64-c750928c8ef6" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
