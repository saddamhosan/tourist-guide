import React from 'react';
import me from '../../images/icons/me1.png';

const About = () => {
    return (
      <div className="md:flex justify-center items-center md:h-[90vh] mx-10">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold py-6">
            I am <span className='text-orange-500'>saddam hosan</span>
          </h1>
          <p className='text-xl text-gray-500 pr-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            temporibus aliquam maxime odio vel. Accusantium similique vel
            consectetur commodi. Alias impedit expedita quisquam cumque, placeat
            aliquid tenetur at fugiat omnis!
          </p>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img className="w-full" src={me} alt="" />
        </div>
      </div>
    );
};

export default About;