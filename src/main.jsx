import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContextMain from "./Pages/Context/ContextProvider/ContextMain.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextMain>
      <App />
    </ContextMain>
  </StrictMode>
);
