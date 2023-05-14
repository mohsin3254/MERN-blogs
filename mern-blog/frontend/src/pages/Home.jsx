import React from "react";

import PostList from "../components/PostList";
import EmailCapture from "../components/EmailCapture";

const Home = () => {
  return (
    <div className="sm:text-center">
      <h1 className=" text-center">
        <b> BLOGS</b>
      </h1>
      <PostList />
      <EmailCapture />
      <div className="flex ml-24">
        <div className="mx-4 py-8">
          <h2 className="text-2xl font-bold uppercase">
            Blog Site Using MERN!
          </h2>
          <p className="text-lg mt-8 max-w-1/2">
            We are a fictional blog dedicated to existing purely to showcase my
            ability to write a basic blog app with React, Node, Express and
            Mongodb technology.
          </p>
        </div>
        <img className="scale-75" />
      </div>
    </div>
  );
};

export default Home;
