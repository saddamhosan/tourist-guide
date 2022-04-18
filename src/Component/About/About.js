import React from 'react';
import me from '../../images/icons/me1.png';

const About = () => {
    return (
      <div className="md:flex justify-center items-center md:h-[90vh] mx-10">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold py-6">
            I am <span className="text-orange-500">saddam hosan</span>
          </h1>
          <p className="text-xl text-gray-500 pr-5">
            I’m actually an electrical student cleverly disguised as a
            successful web developer. Since it was relatively clear early on
            that it would be slightly more than difficult to make a living
            sitting under a tree while reading Kant, I’ve focused my energies on
            the web, which happily has proven itself to be a wonderful decision.
            In the next 6 months letter, I want to be a full-time programmer. So
            that, I spend my whole day, practically every day, experimenting
            with HTML, CSS, and JavaScript.
          </p>
        </div>
        <div className="md:w-1/2 my-10  ">
          <img className="w-[70%] block mx-auto" src={me} alt="" />
        </div>
      </div>
    );
};

export default About;