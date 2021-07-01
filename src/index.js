import React from "react";
import ReactDOM from "react-dom";
import "styles/index.css";
import "styles/defaults.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";

import GA4React from "ga-4-react";
const ga4react = new GA4React("G-QPSJEVXLJ3");

(async (_) => {
  await ga4react.initialize();

  ReactDOM.render(<App />, document.getElementById("root"));
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
