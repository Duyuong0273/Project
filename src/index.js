import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import HomePage from "./components/Homepage/Homepage";
import Login_Register from "./components/Login_Register/Login_Register";
import Shop from "./components/Shop/shop";
import About from "./components/Page/About_us";
import Shopping_Cart from "./components/Page/Shopping_Cart";
import Check_out from "./components/Page/Check_out";
import Shop_detail from "./components/Page/Shop_detail";
import Profile from "./components/Profile/Profile";
import Manager from "./components/Manager/Manager";
import Contact from "./components/Page/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-register" element={<Login_Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopping-cart" element={<Shopping_Cart />} />
        <Route path="/check-out" element={<Check_out />} />
        <Route path="/shop-detail" element={<Shop_detail />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Manager" element={<Manager />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
