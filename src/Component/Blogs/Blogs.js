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
              Ans: Authentication মূলত user কে সেটা যাচাই করে। Authentication
              হলো একটি good identity এবং access management process এর প্রথম ধাপ।
              Authentication process user দ্বারা দৃশ্যমান এবং user চাইলে এটিকে
              আংশিক পরিবর্তন করতে পারে। Password, Pin ইত্যাদি process এর মাধ্যমে
              Authentication কাজ করে। কোনো user কোন কোন resource ব্যাবহার করতে
              পারবে সেটা Authorization নির্ধারণ করে। Authorization
              Authentication এর উপর নির্ভশীল। Authentication করা না হলে
              Authorization কাজ করে না। তবে user চাইলেই Authorization পরিবর্তন
              করতে পারবে না।
            </p>
          </div>
          <div className="bg-blue-100 p-5 rounded-xl">
            <h1 className="text-2xl font-semibold">
              Q:Why are you using firebase? What other options do you have to
              implement authentication?
            </h1>
            <p className="text-xl text-gray-500">
              Ans:আমি firebase ব্যবহার করছি কারণ এটি developer এবং user এর জন্য
              ব্যবহার করা সহজ। ফায়ারবেস গুগল তৈরি করেছে তাই এটি developer এবং
              user কে top level security প্রদান করে।আমি আমার website কে hosting
              করার জন্য, Authentication service add করার জন্য Firebase use
              করি। <br /> website এ
              authentication implement করার জন্য আমরা firebase ছাড়া আরো অনেক
              website use করতে পারি যেমন: Parse, Back4App, AWS Amplify, Kuzzle,
              Couchbase, NativeScript, RxDB, Flutter, LoopBack, SashiDo Ect
            </p>
          </div>
          <div className="bg-blue-100 p-5 rounded-xl">
            <h1 className="text-2xl font-semibold">
              Q: What other services does firebase provide other than
              authentication
            </h1>
            <p className="text-xl text-gray-500">
              Ans: Firebase user কে অনেকগুলো service provide করে। যেমন: Cloud
              Firestore, Cloud Functions, Hosting, Cloud Storage, Google
              Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote
              Config
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;