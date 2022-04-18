import React, { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Blogs from './Component/Blogs/Blogs';
import Checkout from "./Component/Checkout/Checkout";
import Home from "./Component/Home/Home";
import useServices from "./Component/Hook/useServices";
import Login from "./Component/Login/Login";
import NotFound from "./Component/NotFound/NotFound";
import Register from "./Component/Register/Register";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Footer from "./Component/Shared/Footer";
import Header from "./Component/Shared/Header";

export const ServiceContext=createContext('')

const App = () => {
  const [services] = useServices();
  return (
    <ServiceContext.Provider value={services}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/checkout/:id"
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
    </ServiceContext.Provider>
  );
};

export default App;
