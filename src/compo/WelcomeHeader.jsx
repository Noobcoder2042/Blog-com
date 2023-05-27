import React from "react";

const WelcomeHeader = () => {
  return (
    <header className="bg-gradient-to-r from-violet-500 to-indigo-500 drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)]">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-white">Welcome to BlogCom</h1>
        <p className="text-lg text-white mt-2">
          Discover interesting articles, insights, and more!
        </p>
      </div>
    </header>
  );
};

export default WelcomeHeader;
