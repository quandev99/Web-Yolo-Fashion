import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import Layout from "./components/layouts";
import "./sass/index.scss";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
