import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeContexProvider } from "./context/ThemeContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContexProvider>
      <App />
    </ThemeContexProvider>
  </React.StrictMode>
);
