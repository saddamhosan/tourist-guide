import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from '../Social/Social';
import Spinner from '../Spinner/Spinner';
import auth from './../../firebase.init';
import './Log.css';

const Login = () => {
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);

    

    const [sendPasswordResetEmail, sending, ResetPassError] =
      useSendPasswordResetEmail(auth);

    const handleEmail = (e) => {
      setEmail(e.target.value);
    };
    const handlePassword = (e) => {
      setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      await signInWithEmailAndPassword(email, password);
     
    };

   

    const handleResetPassword = () => {
      sendPasswordResetEmail(email);
      toast.success("sent email",{id:'sent mail'});
    };

    if (user ) {
       toast.success("login success", { id: "login" });
      navigate(from, { replace: true });
    } 


    return (
      <div className="login w-11/12 md:w-1/3 mx-auto border-2 my-5 p-10 rounded-xl font-serif">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center text-blue-500">
            Please Login...
          </h1>
          <div className="my-3">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              onBlur={handleEmail}
              className="btn text-xl p-2 border w-full"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              onBlur={handlePassword}
              className="btn text-2xl border w-full p-2"
              type="password"
              name="password"
              required
            />
          </div>

          {(loading || sending) && (
            <p>
              <Spinner />
            </p>
          )}

          {(error || ResetPassError) && (
            <p className="text-red-600">
              Error: {error?.message} {ResetPassError?.message}
            </p>
          )}

          <div className="flex justify-center my-3">
            <input
              className="bg-blue-600 text-xl font-bold px-5 py-2 text-white rounded-xl mt-2"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <p className="text-xl text-center">
          First time on the Tourist guid?
          <Link
            className="text-blue-500 hover:text-orange-600 ml-3"
            to="/register"
          >
            Create account
          </Link>
        </p>
        <p className="text-xl text-center mt-3">
          forget password?
          <span
            onClick={handleResetPassword}
            className="text-blue-500 hover:text-orange-600 ml-3 cursor-pointer"
          >
            reset password
          </span>
        </p>
        <Social />
        <Toaster />
      </div>
    );
};

export default Login;