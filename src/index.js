import React from "react";
import ReactDom from "react-dom";

import { LangProvider } from "./context/langContext";
import App from "./components/App";

import "./style.scss";

const container = document.getElementById("root");



ReactDom.render(
  <LangProvider>
    <App />
  </LangProvider>,
  container
);
