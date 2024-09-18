import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAccount from "./MyAccount";
import WishList from "./WishList";
import MyCart from "./MyCart";
import Header from "../components/Header";
const HeaderPages = () => {
  return (
    <>
      
        <Header />
        <Routes>
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/mycart" element={<MyCart />} />
        </Routes>
    </>
  );
};

export default HeaderPages;
