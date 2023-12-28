import React from "react";

import { BrowserRouter } from "react-router-dom";
import Header from "../header";
import MyRoutes from "../../routes/Routes"; // Adjust the import path accordingly
import ProductDetailModal from "../portal/productDetailModal";
import Footer from "../footer/index";

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
        <ProductDetailModal></ProductDetailModal>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
