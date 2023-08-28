import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./popup/Popup";
import "./index.css";

ReactDOM.createRoot(document.getElementById("popup")!).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
