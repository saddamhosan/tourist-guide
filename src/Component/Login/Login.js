import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from '../Social/Social';
import auth from './../../firebase.init';

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
      console.log("sent email");
    };

    if (user ) {
      navigate(from, { replace: true });
    } 


    return (
      <div className="w-1/3 mx-auto border-2 my-5 p-10 rounded-xl">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold">Please Login...</h1>
          <div className="my-3">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              onBlur={handleEmail}
              className="border w-full"
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
              className="border w-full"
              type="password"
              name="password"
              required
            />
          </div>

          {(loading || sending) && (
            <p>
              {/* <Spinners /> */}
              loading....
            </p>
          )}

          {(error || ResetPassError) && (
            <p className="text-red-600">
              Error: {error?.message} {ResetPassError?.message}
            </p>
          )}

          <div className="flex justify-center">
            <input
              className="bg-blue-600 text-xl font-bold px-5 py-2 text-white rounded-xl mt-2"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <p>
          First time on the Tourist guid?
          <Link className="text-blue-600" to="/register">
            Create account
          </Link>
        </p>
        <p className="mt-2">
          forget password?
          <span
            onClick={handleResetPassword}
            className="text-blue-600 cursor-pointer"
          >
            reset password
          </span>
        </p>
        <Social/>
      </div>
    );
};

export default Login;