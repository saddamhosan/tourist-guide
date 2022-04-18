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
            I am very passionate about programming development. I always try to
            hard work to fulfill my project.In every moment I try to gain my
            programming level.In next 6 months at least I want to join a
            reputated programming company as a interner or full time job.
            Besides in the next 10 years, I'd like to move into a Chief
            programming Officer role. A position like this senior programming
            devoloper job would let me gain more experience with project
            management and leadership.
          </p>
        </div>
        <div className="md:w-1/2 my-10  ">
          <img className="w-[70%] block mx-auto" src={me} alt="" />
        </div>
      </div>
    );
};

export default About;