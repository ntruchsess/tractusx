import React from "react";
import ReactDOM from "react-dom";
import { store } from "./state/store";
import { Provider } from "react-redux";
import Router from "./components/Router";
import UserService from "./services/UserService";

UserService.initKeycloak(() =>
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.StrictMode>,
    document.getElementById("app")
  )
);
