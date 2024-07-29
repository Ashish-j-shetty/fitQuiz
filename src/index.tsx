import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        <App />
      </Router>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
