import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { ImArrowRight } from "react-icons/im";
import { useParams } from "react-router-dom";
import { ServiceContext } from "../../App";
import auth from "../../firebase.init";
import "../Login/Log.css";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const services = useContext(ServiceContext);
  const exists = services.find((service) => service.id === +id);

  const { img, name, extra, duration, destination, price } = exists;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for hire me", { id: "Checkout" });
  };
console.log(user);
  return (
    <div className="md:flex gap-10 mx-10 my-20">
      <div className="md:w-1/2">
        <div>
          <img className="w-full h-[300px] rounded-t-xl " src={img} alt="" />
        </div>
        <div className="mt-6 p-6">
          <h1 className="text-2xl text-center text-blue-500 font-bold py-3 font-serif">
            {name}
          </h1>
          <h1 className="text-xl py-1 flex items-center font-serif">
            <span>
              <ImArrowRight color="blue" />
            </span>
            <span className="ml-4">{destination}</span>
          </h1>
          <h1 className="text-xl py-1 flex items-center font-serif">
            <span>
              <ImArrowRight color="blue" />
            </span>
            <span className="ml-4">{extra}</span>
          </h1>
          <h1 className="text-xl py-1 flex items-center font-serif">
            <span>
              <ImArrowRight color="blue" />
            </span>
            <span className="ml-4">{duration}</span>
          </h1>
          <h1 className="font-serif text-xl font-bold py-3">
            Price: $ {price}
          </h1>
        </div>
      </div>

      <div className="login md:w-1/2 border font-serif rounded-2xl">
        <form onSubmit={handleSubmit} className="w-10/12 mx-auto my-10">
          <h1 className="text-center text-blue-400 text-2xl font-bold">
            Please Checkout
          </h1>
          <div className="my-3">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="btn text-2xl border w-full px-2"
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
              className="btn text-2xl border w-full px-2"
              type="email"
              name="email"
              value={user?.email}
            />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="address">
              Address
            </label>
            <textarea
              className="btn text-2xl border w-full px-2"
              name="address"
              required
            />
          </div>
          <div className="my-3">
            <label htmlFor="phone">Phone number</label>
            <input
              className="btn text-2xl border w-full px-2"
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
    </div>
  );
};

export default Checkout;
