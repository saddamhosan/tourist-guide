import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/icons/logo.png";

const Footer = () => {
    const date=new Date()
    const year =date.getFullYear()
    return (
      <div className="bg-black text-white">
        <div className="text-center md:flex md:mx-20 md:justify-between">
          <div className="flex justify-center pt-5">
            <div
              className="flex items-center text-white font-bold text-3xl cursor-pointer  font-[Poppins] 
      "
            >
              <img width={"40px"} src={logo} alt="" />
              <Link className="ml-3" to="/">
                Travel Companion
              </Link>
            </div>
          </div>
          <div className="m-5">
            <li>Home</li>
            <li>Blogs</li>
            <li>About</li>
            <li>SignIn</li>
          </div>
        </div>
        <p className="text-center ">
          <small>copy right &#169; {year}</small>
        </p>
      </div>
    );
};

export default Footer;