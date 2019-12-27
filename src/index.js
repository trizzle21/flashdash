import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const title = "Sample Dashboard";
const name = "Test Name";

ReactDOM.render(
  <App title={ title } name={ name } />,
  document.getElementById('app')
);

module.hot.accept();
