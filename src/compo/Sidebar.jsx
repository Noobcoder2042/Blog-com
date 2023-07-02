import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ userName }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-row bg-gray-100">
      {isSidebarOpen && (
        <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
          <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="text-xl uppercase text-indigo-500">
              <p>👋🏼 {userName}</p>
            </h1>
          </div>
          <ul className="flex flex-col py-4">
            <li>
              <Link
                to={"/user/profile"}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-user"></i>
                </span>
                <span className="text-sm font-medium">Profile</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-bell"></i>
                </span>
                <span className="text-sm font-medium">Notifications</span>
                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
                  5
                </span>
              </a>
            </li>
            <li>
              <Link
                to="/user/devinfo"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-log-out"></i>
                </span>
                <span className="text-sm font-medium">Dev Intro</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div
        className={`flex-grow bg-gray-200 ${
          isSidebarOpen ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        {/* Add your main content here */}
      </div>
      <button
        className={`fixed ${isSidebarOpen ? "bottom-4" : "top-"} ${
          isSidebarOpen ? "left-0" : "left-0"
        } bg-indigo-500 text-white px-5 py-2  my-4 shadow-lg rounded-r-lg

        `}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "❌" : "Dashboard"}
      </button>
    </div>
  );
}

export default Sidebar;
