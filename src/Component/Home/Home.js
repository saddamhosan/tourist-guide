import React from "react";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  return (
    <div className="bg-slate-200">
      <Banner />
      <Services />
      <Reviews />
    </div>
  );
};

export default Home;
