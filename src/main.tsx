import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../store";
import App from "./App";
import "./styles.css";
import "./i18n";

const container = document.getElementById("root");
if (!container) {
  throw new Error(
    "Root container not found. Make sure your index.html has a div with id='root'."
  );
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
