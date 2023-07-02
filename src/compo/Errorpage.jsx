import React from "react";
import { Link } from "react-router-dom";

export const Errorpage = (props) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <img src="https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.gif"></img>
        <div className="bg-white">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl text-indigo-600 lg:text-6xl">
              404
            </h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page{" "}
            </h6>

            <p className="mb-4 text-center text-gray-500 md:text-lg">
              {props.text}
            </p>

            <Link
              to="/"
              className="px-5 py-2 rounded-md text-indigo-100 bg-indigo-600 hover:bg-indigo-700"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
