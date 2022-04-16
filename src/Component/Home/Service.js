import React from 'react';

const Service = ({service}) => {
    const { img, name, duration, destination, price } = service;
    return (
      <div className="bg-white p-6 rounded-xl shadow-2xl">
        <div>
          <img className="w-full h-[300px] rounded-xl" src={img} alt="" />
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-bold">Package Name:{name}</h1>
          <h1 className="text-xl ">Destination: {destination}</h1>
          <h1 className="text-xl ">Duration:{duration}</h1>
          <h1 className="text-xl font-bold">Price: $ {price}</h1>
          <button className="text-xl font-bold bg-blue-700 text-white mt-2 px-5 rounded-lg py-1 block mx-auto hover:text-gray-500 duration-500">
            Checkout
          </button>
        </div>
      </div>
    );
};

export default Service;