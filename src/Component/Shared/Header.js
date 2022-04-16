// import { signOut } from "firebase/auth";
import React, { useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
// import auth from "../../firebase.init";

const Header = () => {
  let [open, setOpen] = useState(false);
//   const [user] = useAuthState(auth);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="h-16 md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer  font-[Poppins] 
      text-gray-800"
        >
          <Link to="/">Red Chilli</Link>
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
              className="text-gray-800 hover:text-gray-400 duration-500"
              to="cart"
            >
              <AiOutlineShoppingCart />
            </NavLink>
          </li>

          <li className="md:ml-8 text-xl md:my-0 my-7">
            {/* {user?.uid ? (
              <button onClick={() => signOut(auth)}>sign out</button>
            ) : (
              <NavLink
                className="text-gray-800 hover:text-gray-400 duration-500"
                to="signIn"
              >
                Sign In
              </NavLink>
            )} */}
          </li>

          <li className="md:ml-8 text-xl md:my-0 my-7">
            <NavLink
              className="text-gray-800 hover:text-gray-400 duration-500"
              to="signUp"
            >
              Sign Up
            </NavLink>
          </li>
          {/* {user?.uid && <p className="ml-6">{user?.displayName}</p>} */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
