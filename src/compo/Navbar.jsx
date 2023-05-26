import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* <!-- component --> */}
      <nav className="bg-gray-200 shadow shadow-gray-300 w-full px-4 md:px-8">
        <div className="container mx-auto md:max-w-6xl flex items-center justify-between flex-wrap md:flex-nowrap">
          {/* <!-- Logo --> */}
          <div className="text-indigo-500 md:order-1 text-2xl md:text-4xl font-bold">
            BlogCom
            <p className="text-xs md:text-sm font-thin py-1 text-slate-600">
              Your Favorite Blog Site 💜
            </p>
          </div>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between">
              {/* <!-- Active Link = text-indigo-500
                  Inactive Link = hover:text-indigo-500 --> */}
              <li className="px-2 md:px-4 md:py-2 text-indigo-500">
                <NavLink to="/">HOME</NavLink>
              </li>
              <li className="px-2 md:px-4 md:py-2 hover:text-indigo-400">
                {/* <a href="#">BLOG</a> */}
                <NavLink to="/blog">BLOG</NavLink>
              </li>
              <li className="px-2 md:px-4 md:py-2 hover:text-indigo-400">
                {/* <a href="#">ABOUT</a> */}
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li className="px-2 md:px-4 md:py-2 hover:text-indigo-400">
                {/* <a href="#">CONTACT</a> */}
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>
          <div className="order-2 md:order-3">
            <button className="px-2 md:px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
              {/* <!-- Heroicons - Login Solid --> */}
              <NavLink to="/login"><span>⚡ LOG IN</span></NavLink>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

