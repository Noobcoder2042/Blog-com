const posts = [
  {
    title: "Nvidia: The chip maker that became an AI superpower",
    img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/C3D6/production/_129843105_gettyimages-1468619875.jpg.webp",
    name: "Zoe Corbyn",
    content:
      "It is one of many supercomputers - some known publicly, some not - that have been built with Nvidia GPUs for a variety of scientific as well as AI use cases",
  },
  {
    title: "OpenAI CEO: AI regulation is essential",
    img: "https://www.artificialintelligence-news.com/wp-content/uploads/sites/9/2023/05/0D01771D-80D0-4DAE-BE4D-C6E4B499044D-350x242.jpeg",
    content:
      "OpenAI CEO Sam Altman testified in front of a Senate judiciary committee panel and emphasised the importance of regulating AI.",
    name: "Robin Maxwell",
  },
  {
    title:
      "Jay Migliaccio, IBM Watson: On leveraging AI to improve productivity",
    img: "https://www.artificialintelligence-news.com/wp-content/uploads/sites/9/2023/05/jay-migliaccio-ibm-watson-orchestrate-ai-artificial-intelligence-enterprise-chatbot-digital-worker-employee-350x232.jpg",
    content:
      "IBM has been refining its AI solutions for decades and knows a thing or two about helping businesses leverage the technology to improve productivity.n 1997, IBM’s Deep Blue supercomputer was used to beat World",
    name: "Jhon Doe",
  },
  {
    title: "Wozniak warns AI will power next-gen scams",
    img: "https://www.hatchwise.com/wp-content/uploads/2022/09/image3-1024x576.jpeg",
    content:
      "Apple co-founder Steve Wozniak has raised concerns over the potential misuse of AI-powered tools by cybercriminals to create convincing online scams. ",
    name: "Red Hacker",
  },
];

import React from "react";

const Cards = () => {
  return (
    <div>
      <div className=" w-fit">
        <h1 className="text-5xl font-bold leading-9 text-center text-gray-800  m-20">
          Trading Blog Post
        </h1>
        <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 m-5 ">
          {posts.map((item, key) => (
            <div className="w-full rounded-xl shadow-md  bg-white" key={key}>
              <img
                className="object-cover w-full h-48 p-1 rounded-xl"
                src={item.img}
                alt="image"
              />

              <div className="p-4">
                <h4 className="text-xl font-semibold text-blue-600">
                  {item.title}
                </h4>
                <p className="mb-2 leading-normal text-black ">
                  {item.content}
                </p>
                {item.name && (
                  <p className="mb-2 leading-normal text-white ">
                    By {item.name}
                  </p>
                )}

                <button className="px-4 py-2 text-sm text-blue-100 bg-indigo-500 hover:bg-indigo-800 rounded shadow">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
