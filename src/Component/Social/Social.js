import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

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
     navigate(from, { replace: true });
   } 

    return (
      <div>
        {( FBLoading || GhLoading || GgLoading ) && (
          <p>
            {/* <Spinners /> */}
            loading....
          </p>
        )}

        {( FBError || GhError || GgError ) && (
          <p className="text-red-600">
            Error:  {GgError?.message} {FBError?.message}
            {GhError?.message} 
          </p>
        )}

        <div className="flex items-center">
          <div className="bg-gray-500 h-[1px] w-full"></div>
          <p className="text-center mx-4 ">Or</p>
          <div className="bg-gray-500 h-[1px] w-full"></div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="border-2 rounded-xl w-full text-xl py-2"
        >
          Login with google
        </button>
        <button
          onClick={handleGithubSignIn}
          className="border-2 rounded-xl w-full text-xl py-2 mt-2"
        >
          Login with gitHub
        </button>
        <button
          onClick={handleFacebookSignIn}
          className="border-2 rounded-xl w-full text-xl py-2 mt-2"
        >
          Login with Facebook
        </button>
      </div>
    );
};

export default Social;