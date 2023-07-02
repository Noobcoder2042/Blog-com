import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../compo/firebase";

const Hero = () => {
  const isLoggedIn = !!auth.currentUser;

  const getStartedLink = isLoggedIn ? "/user/blog" : "/userLog/Signup";

  return (
    <section className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white py-16 my-10 w-full drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)]">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Hi BlogComer 🙋🏼‍♂️</h1>
        <p className="text-lg mb-8">
          We provide a premier platform for bloggers to express, connect, and
          shine. Unleash your creativity, no matter your experience level. Our
          intuitive tools make blogging effortless. Join our vibrant community,
          engage in discussions, and grow as a writer. Customize your blog with
          stunning templates and design options. Let your personality shine
          through. Discover captivating content in various niches. Stay
          inspired, find fresh ideas, and expand your horizons. Fashion, travel,
          technology, and more – BlogCom amplifies your voice. Share your
          knowledge, experiences, and stories with the world. Join us today and
          make your mark in the blogosphere. Welcome to BlogCom – where dreams
          come true!
        </p>
        <Link
          to={getStartedLink}
          className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 hover:text-blue-600"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
