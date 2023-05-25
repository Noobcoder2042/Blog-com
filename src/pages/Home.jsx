import React from "react";
import WelcomeHeader from "../compo/WelcomeHeader";
import Cards from "../compo/Cards";
import Hero from "../compo/Hero";
import Footer from "../compo/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-black w-screen ">
        <WelcomeHeader />
        <Hero />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default Home;
