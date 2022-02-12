import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "./css/index.scss";

//se configura el render de la app con el strict mode activo para evidenciar errores o problemas potenciales
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// configuración de PWA, se aplica .register para activar la PWA o .unregister para desactivarls
serviceWorkerRegistration.unregister();

// uso de las web vitals, se usa console.log para mostrar los resultados
reportWebVitals();
