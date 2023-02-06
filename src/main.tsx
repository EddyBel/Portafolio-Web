import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GithubProvider } from "./context/github_context";
import { YoAPIProvider } from "./context/yoapi_context";
import { ProviderWeb } from "./context/web_context";
import "./sass/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ProviderWeb>
      <GithubProvider>
        <YoAPIProvider>
          <App />
        </YoAPIProvider>
      </GithubProvider>
    </ProviderWeb>
  </BrowserRouter>
);
