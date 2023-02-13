import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GithubProvider } from "./context/github_context";
import { YoAPIProvider } from "./context/yoapi_context";
import { ProviderWeb } from "./context/web_context";
import "./sass/global.scss";

console.log(
  "¡Hola! ¿Buscando un saludo secreto? ¡Aquí tienes uno! ¡Que la fuerza te acompañe siempre!😜✌️"
);

console.log(
  "Hello! Looking for a secret greeting? Here's one! May the force be with you always!😜✌️"
);

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
