import { CookiesProvider } from "react-cookie";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Provider as ReduxQueryProvider } from "redux-query-react";
import App from "./App";
// import "./css/bootstrap.css"; // vanilla bs
import "./css/darquartz/bootstrap.css"; // Added this :boom:

// Quartz
// Sandstone
// Simplex
// solar
// superhero
// United
// > darkly
// flatly
///!!!  Vapor
// Yeti
// slate

import "./App.css";

// Add a futuristic font (Orbitron) globally
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

import store from "./thor/redux/store";
export const getQueries = (state) => state.queries;

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ReduxQueryProvider queriesSelector={getQueries}>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <App />
      </CookiesProvider>
    </ReduxQueryProvider>
  </Provider>
);
