import React from "react";
import WelcomeHeader from "../compo/WelcomeHeader";
import Cards from "../compo/Cards";
import Hero from "../compo/Hero";
import Footer from "../compo/Footer";
import Body from "../compo/Body";


const Home = () => {
  return (
    <>
      <div>
        <WelcomeHeader />
        <Hero />
        <Body />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default Home;
