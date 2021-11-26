import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { AppContextProvider } from "./contexts/AppContext";
import { AuthContextProvider } from "./contexts/AuthContext";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </AuthContextProvider>
  </StrictMode>,
  rootElement
);
