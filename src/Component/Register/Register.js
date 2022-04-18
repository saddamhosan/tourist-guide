import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import '../Login/Log.css';
import Social from '../Social/Social';
import Spinner from '../Spinner/Spinner';

const Register = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const navigate = useNavigate();

const [createUserWithEmailAndPassword, , loading, error] =
  useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

const [updateProfile, updating, updateError] = useUpdateProfile(auth);


const handleName = (e) => {
  setName(e.target.value);
};
const handleEmail = (e) => {
  setEmail(e.target.value);
};
const handlePassword = (e) => {
  setPassword(e.target.value);
};
const handleConfirmPassword = (e) => {
  setConfirmPassword(e.target.value);
};


const handleSubmit = async (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    toast.error(" password mich match");
    return;
  }
  await createUserWithEmailAndPassword(email, password);
  await updateProfile({ displayName: name });
  toast.success("login success", { id: "login" });
  navigate("/");
};


    return (
      <div className="login w-11/12  md:w-1/3 mx-auto border-2 my-5 p-10 rounded-xl font-serif">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center text-blue-500">
            Please Register...
          </h1>
          <div className="my-3">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              onBlur={handleName}
              className=" btn text-xl border w-full p-2"
              type="text"
              name="name"
              id=""
            />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              onBlur={handleEmail}
              className="btn text-xl border w-full p-2"
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
              className="border w-full btn text-xl p-2"
              type="password"
              name="password"
              required
            />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="Confirm password">
              Confirm Password
            </label>
            <input
              onBlur={handleConfirmPassword}
              className="border w-full btn text-2xl p-2"
              type="password"
              name="confirm password"
              required
            />
          </div>
          {(loading || updating) && <Spinner />}
          {(error || updateError) && (
            <p className="text-red-600">
              {error.message} {updateError.message}
            </p>
          )}
          <div className="flex justify-center my-3">
            <input
              className="bg-blue-600 text-xl font-bold px-5 py-2 text-white rounded-xl mt-2"
              type="submit"
              value="Register"
            />
          </div>
        </form>
        <p className="text-xl text-center">
          Already have an account?
          <Link
            className="text-blue-500 hover:text-orange-600 ml-3"
            to="/login"
          >
            Login
          </Link>
        </p>
        <Social />
        <Toaster />
      </div>
    );
};

export default Register;