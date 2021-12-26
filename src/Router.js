import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./components/common/Error";
import ProductDetail from "./components/products/ProductDetail";
import ProductsHome from "./components/products/ProductsHome";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";

const Router = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="/" element={<ProductsHome />} />
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error message="Not Found (404)" />} />
      </Routes>
    </main>
  );
};

export default Router;
