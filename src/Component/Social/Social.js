import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ghImg from '../../images/icons/download.png';
import fbImg from '../../images/icons/fb.png';
import googleImg from '../../images/icons/google.png';
import '../Login/Log.css';
import Spinner from '../Spinner/Spinner';

const Social = () => {
const navigate = useNavigate();
const location = useLocation();
const from = location?.state?.from?.pathname || "/";

const [signInWithGoogle, GgUser, GgLoading, GgError] =
  useSignInWithGoogle(auth);

const [signInWithGithub, GhUser, GhLoading, GhError] =
  useSignInWithGithub(auth);

const [signInWithFacebook, FBUser, FBLoading, FBError] =
  useSignInWithFacebook(auth);

   const handleGoogleSignIn = async () => {
     await signInWithGoogle();
   };

   const handleGithubSignIn = async () => {
     await signInWithGithub();
   };

   const handleFacebookSignIn = async () => {
     await signInWithFacebook();
   };

   if ( FBUser || GhUser || GgUser) {
     toast.success("login success", { id: "login" });
     navigate(from, { replace: true });
   } 

    return (
      <div>
        {(FBLoading || GhLoading || GgLoading) && (
          <p>
            <Spinner />
          </p>
        )}

        {(FBError || GhError || GgError) && (
          <p className="text-red-600">
            Error: {GgError?.message} {FBError?.message}
            {GhError?.message}
          </p>
        )}

        <div className="flex items-center my-8">
          <div className="bg-gray-500 h-[1px] w-full"></div>
          <p className="text-center mx-4 ">Or</p>
          <div className="bg-gray-500 h-[1px] w-full"></div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="btn border-2 rounded-xl w-full text-xl py-2"
        >
          <div className="flex justify-center">
            <img width={"30px"} src={googleImg} alt="" />
            <span className="ml-5">Login with google</span>
          </div>
        </button>
        <button
          onClick={handleGithubSignIn}
          className="btn border-2 rounded-xl w-full text-xl py-2 my-5"
        >
          <div className="flex justify-center">
            <img width={"30px"} src={ghImg} alt="" />
            <span className="ml-5">Login with gitHub</span>
          </div>
        </button>
        <button
          onClick={handleFacebookSignIn}
          className=" btn border-2 rounded-xl w-full text-xl py-2 mt-2"
        >
          <div className="flex justify-center">
            <img width={"30px"} src={fbImg} alt="" />
            <span className="ml-5"> Login with Facebook</span>
          </div>
        </button>
        <Toaster />
      </div>
    );
};

export default Social;