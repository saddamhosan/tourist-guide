import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Blogs from './Component/Blogs/Blogs';
import Checkout from "./Component/Checkout/Checkout";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import NotFound from "./Component/NotFound/NotFound";
import Register from "./Component/Register/Register";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Footer from "./Component/Shared/Footer";
import Header from "./Component/Shared/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
