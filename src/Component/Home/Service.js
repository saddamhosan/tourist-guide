import React from 'react';
import { ImArrowRight } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
  const navigate=useNavigate()
    const { img, name, extra, duration, destination, price } = service;
    return (
      <div className="bg-white  rounded-xl shadow-2xl">
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
          <button
            onClick={() => navigate("/checkout")}
            className="font-serif text-xl font-bold bg-blue-700 text-white mt-2 px-5 rounded-lg py-1 block mx-auto hover:text-gray-500 duration-500"
          >
            Checkout
          </button>
        </div>
      </div>
    );
};

export default Service;