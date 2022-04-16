// import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
// import auth from "../../firebase.init";

const Header = () => {
  let [open, setOpen] = useState(false);
//   const [user] = useAuthState(auth);
  return (
    <div className="shadow-md w-full  top-0 left-0">
      <div className="h-16 md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer  font-[Poppins] 
      text-gray-800"
        >
          <Link to="/">Tourist Guide</Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <GiHamburgerMenu name={open ? "close" : "menu"}></GiHamburgerMenu>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              className={({ isActive }) =>
                `text-gray-800 hover:text-gray-400 duration-500 ${
                  isActive ? "border-b-2 border-red-400" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              className={({ isActive }) =>
                `text-gray-800 hover:text-gray-400 duration-500 ${
                  isActive ? "border-b-2 border-red-400" : ""
                }`
              }
              to="signIn"
            >
              Blogs
            </NavLink>
          </li>

          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              className={({ isActive }) =>
                `text-gray-800 hover:text-gray-400 duration-500 ${
                  isActive ? "border-b-2 border-red-400" : ""
                }`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              className={({ isActive }) =>
                `text-gray-800 hover:text-gray-400 duration-500 ${
                  isActive ? "border-b-2 border-red-400" : ""
                }`
              }
              to="login"
            >
              Login
            </NavLink>
          </li>
          {/* {user?.uid && <p className="ml-6">{user?.displayName}</p>} */}
          {/* {user?.uid ? (
            <button onClick={() => signOut(auth)}>sign out</button>
          ) : (
            <p>hello</p>
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
