import React from "react";
import { Route, Routes } from "react-router-dom";
import NavItme from "./components/navbar/navItem";
import FixedHeader from "./components/navbar/FixedHeader";
import Home from "./pages/home";
import Footer from "./components/footer";
import Product from "./pages/product";
import Auth from "./components/auth";
import Login from "./pages/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  let token = localStorage.getItem("x-auth-token");
  return (
    <>
      <NavItme />
      <FixedHeader />

      <Routes>
        <Route path="" element={<Auth />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default App;
