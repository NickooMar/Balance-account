import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/Context";

import { SpeechProvider } from "@speechly/react-client";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId='8ccd0f0d-866f-46b2-a670-ade9f57e9c1d' language='en-US'>
    <Provider>
      <App />
    </Provider>  
  </SpeechProvider>,
  document.getElementById("root")
);
