import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 text-center w-full">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} BlogCom. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
