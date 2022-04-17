import React from 'react';

const Blogs = () => {
    return (
      <div className=" min-h-[80vh]">
        <div className="grid md:grid-cols-3 gap-10 m-10">
          <div className="bg-blue-100 p-5 rounded-xl">
            <h1 className="text-2xl font-semibold">
              Q:What is the difference between authorization and authentication?
            </h1>
            <p className="text-xl text-gray-500">
              Ans: Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              quaerat dicta nobis ipsa non perspiciatis pariatur. Beatae soluta
              unde quis voluptates rem cumque, ipsa odit ad asperiores, error
              commodi assumenda.
            </p>
          </div>
          <div className="bg-blue-100 p-5 rounded-xl">
            <h1 className="text-2xl font-semibold">
              Q:Why are you using firebase? What other options do you have to
              implement authentication?
            </h1>
            <p className="text-xl text-gray-500">
              Ans: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Nesciunt saepe quae exercitationem! Alias magnam ratione dolores
              expedita nemo libero corrupti error ea a architecto quasi fuga,
              numquam mollitia ab optio?
            </p>
          </div>
          <div className="bg-blue-100 p-5 rounded-xl">
            <h1 className="text-2xl font-semibold">
              Q: What other services does firebase provide other than
              authentication
            </h1>
            <p className="text-xl text-gray-500">
              Ans: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugit quos ullam eveniet accusamus quisquam saepe illum quas,
              quasi delectus at, ab quaerat quam ea cumque repellendus commodi
              doloremque facere assumenda!
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;