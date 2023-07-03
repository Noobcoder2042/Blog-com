import React from "react";
import Faq from "../compo/Faq";
import { TestMonials } from "../compo/TestMonials";

export const About = () => {
  return (
    <>
      <div className=" h-50 flex flex-col justify-center items-center ">
        <div className=" first-letter:text-indigo-500 m-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          Introducing
          <span className=" text-indigo-500"> BlogCom ⚡</span>
        </div>

        <p className="m-5 text-gray-500 dark:text-gray-400 w-3/4  hover:text-gray-600 cursor-pointer ">
          Introducing BlogCom: A Revolutionary Blogging Platform BlogCom is a
          groundbreaking blogging platform that redefines the way we create and
          share content online. With its innovative features and user-friendly
          interface, BlogCom empowers bloggers and content creators to connect
          with their audience in a whole new way. At the heart of BlogCom is its
          intuitive and customizable editor, designed to make writing and
          formatting blog posts a breeze. Whether you're a seasoned blogger or
          just starting out, BlogCom offers a seamless writing experience with a
          range of formatting options, spell-checking, and real-time
          collaboration. But BlogCom doesn't stop at writing. It provides a
          comprehensive set of tools to enhance your content, from embedding
          multimedia elements to optimizing your posts for search engines. With
          built-in SEO features and analytics, you can track your blog's
          performance and reach a wider audience. What sets BlogCom apart is its
          vibrant community. Connect with fellow bloggers, engage in
          discussions, and discover new ideas. The platform's social sharing
          features enable easy promotion of your content across various
          channels, expanding your blog's reach and visibility. Whether you're a
          blogger, a business owner, or a passionate writer, BlogCom is the
          ultimate platform to unleash your creativity and build a thriving
          online presence. Join the BlogCom community today and experience the
          future of blogging.
        </p>
      </div>
      <Faq />
      <TestMonials/>
    </>
  );
};
