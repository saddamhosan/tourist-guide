import React, { useContext } from "react";
import { ServiceContext } from "./../../App";
import Service from "./Service";

const Services = () => {
  const services = useContext(ServiceContext);
  return (
    <div className="py-20">
      <h1 className="text-center text-3xl text-blue-600 font-bold">
        Tour Packages
      </h1>
      <div className="grid md:grid-cols-3 gap-10 m-10">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
