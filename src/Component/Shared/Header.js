import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  let [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <div className="shadow-md w-full sticky md:static top-0 left-0">
      <div className="h-16 md:flex items-center justify-between bg-blue-600 py-4 md:px-10 px-7">
        <div
          className="text-white font-bold text-3xl cursor-pointer  font-[Poppins] 
      "
        >
          <Link to="/">Tourist Guide</Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <GiHamburgerMenu color="white" name={open ? "close" : "menu"} />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-600 left-0 w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              className={({ isActive }) =>
                `text-white font-semibold hover:text-orange-300 duration-500 ${
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
                `text-white font-semibold hover:text-orange-300 duration-500 ${
                  isActive ? "border-b-2 border-red-400" : ""
                }`
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
          </li>

          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              className={({ isActive }) =>
                `text-white font-semibold hover:text-orange-300 duration-500 ${
                  isActive ? "border-b-2 border-red-400" : ""
                }`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            {user?.uid ? (
              <button
                className=
                  "text-white font-semibold hover:text-orange-300 duration-500 "
                onClick={() => signOut(auth)}
              >
                sign out
              </button>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  `text-white font-semibold hover:text-orange-300 duration-500 ${
                    isActive ? "border-b-2 border-red-400" : ""
                  }`
                }
                to="/login"
              >
                Login
              </NavLink>
            )}
          </li>
          {user?.uid && <p className="ml-6 font-bold text-slate-700">{user?.displayName}</p>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
