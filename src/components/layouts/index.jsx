import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import MyRoutes from "../../routes/Routes"; // Adjust the import path accordingly

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <div className="main">
            <MyRoutes />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
