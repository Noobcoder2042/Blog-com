import React from "react";

const Body = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12  py-9 px-4 w-auto sm:w-auto">
          <div
            role="main"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-5xl font-bold leading-9 text-center text-gray-800">
              This Week Blogs
            </h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              If you're looking for random paragraphs, you've come to the right
              place. When a random word or a random sentence isn't quite enough
            </p>
          </div>
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2023
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        a group of words taken from a text or speech
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Direct quotations involve taking someone else's exact
                        words or statements and incorporating the quote into
                        your writing. sentence
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/DYxtCJq/img-1.png"
                    className="w-full"
                    alt="chair"
                  />
                </div>
                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2023
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        Lorem, ipsum dolor sit amet consectetur
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Dive into minimalism
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/3C5HvxC/img-2.png"
                    className="w-full"
                    alt="wall design"
                  />
                </div>
              </div>
              <div className="relative">
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2023
                  </p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Lorem ipsum dolor sit amet.
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni, praesentium nostrum! A, dolorem repudiandae totam
                      doloribus aut ipsa veritatis eveniet.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/Ms4qyXp/img-3.png"
                  alt="sitting place"
                  className="w-full mt-8 md:mt-6 hidden sm:block"
                />
                <img
                  className="w-full mt-4 sm:hidden"
                  src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                  alt="sitting place"
                />
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative">
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 April 2023
                  </p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Lorem ipsum dolor sit amet.
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus quam explicabo impedit neque quae vitae
                      blanditiis libero ipsum est consequuntur!
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/6Wfjf2w/img-4.png"
                  alt="sitting place"
                  className="w-full sm:block hidden"
                />
                <img
                  className="w-full sm:hidden"
                  src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                  alt="sitting place"
                />
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative w-full">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2023
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae!
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quisquam necessitatibus alias perspiciatis
                        quibusdam, voluptatum dolor at beatae. Nobis, illo!
                        Itaque!
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/3yvZBpm/img-5.png"
                    className="w-full"
                    alt="chair"
                  />
                </div>
                <div className="relative w-full sm:mt-0 mt-4">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      12 April 2023
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        The Decorated Ways
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Dive into minimalism
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            stroke-width="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/gDdnJb5/img-6.png"
                    className="w-full"
                    alt="wall design"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
