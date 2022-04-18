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
              Ans:Authentication confirms who the client is but Authorization
              decides what assets a client can get to.Authentication works
              through passwords, one-time pins, biometric data, and other data
              given or entered by the client but Authorization works through
              settings that are implemented and maintained by the
              organization.Authentication is unmistakable to and in part
              changeable by the client but Authorization isn not unmistakable to
              or changeable by.
            </p>
          </div>
          <div className="bg-blue-100 p-5 rounded-xl">
            <h1 className="text-2xl font-semibold">
              Q:Why are you using firebase? What other options do you have to
              implement authentication?
            </h1>
            <p className="text-xl text-gray-500">
              Ans: do you have to implement authentication? I am using firebase
              because it is very easy to use for a devoloper and also easy to
              use for a user.Firebase made by google so that it provide a top
              level secruity for a user and develpoer.Firebase oversees all
              information real-time within the database.More often than not,
              verification by a server involves the utilize of a client title
              and watchword. other options is to implement authentication are
              AppWrit
            </p>
          </div>
          <div className="bg-blue-100 p-5 rounded-xl">
            <h1 className="text-2xl font-semibold">
              Q: What other services does firebase provide other than
              authentication
            </h1>
            <p className="text-xl text-gray-500">
              Ans: There are many services which Firebase provides, Most useful
              of them are: Cloud Firestore, Cloud Functions, Hosting, Cloud
              Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic
              Links, Remote Config
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;