import React, { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("data.json")
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[])
  return (
    <div className="py-20">
      <h1 className="text-center text-3xl text-blue-600 font-bold">Tour Packages</h1>
      <div className="grid md:grid-cols-3 gap-10 m-10">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
