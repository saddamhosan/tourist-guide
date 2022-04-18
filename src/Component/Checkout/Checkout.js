import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import auth from '../../firebase.init';
import '../Login/Log.css';

const Checkout = () => {
    const [user] = useAuthState(auth);
    
const handleSubmit=(e)=>{
    e.preventDefault()
    toast.success("Checkout success", { id: "Checkout" });
}

    return (
      <div className="login w-10/12 md:w-3/5 mx-auto border my-10  font-serif rounded-2xl">
        <form onSubmit={handleSubmit} className="w-10/12 mx-auto my-10">
          <h1 className="text-center text-blue-400 text-2xl font-bold">
            Please Checkout
          </h1>
          <div className="my-3">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="btn text-xl border w-full px-2"
              type="text"
              name="name"
              value={user?.displayName}
            />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              className="btn text-xl border w-full px-2"
              type="email"
              name="email"
              value={user?.email}
              readOnly
            />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="address">
              Address
            </label>
            <textarea
              className="btn text-xl border w-full px-2"
              name="address"
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="phone">Phone number</label>
            <input
              className="btn text-xl border w-full px-2"
              type="number"
              name="phone"
              required
            />
          </div>
          <input
            className="bg-blue-600 text-xl font-bold px-5 py-2 text-white rounded-xl mt-8 block mx-auto"
            type="submit"
            value="Checkout"
          />
        </form>
        <Toaster />
      </div>
    );
};

export default Checkout;