import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    },
    {
      question: "How do I install React?",
      answer:
        'You can install React by running "npm install react" or "yarn add react" in your project directory.',
    },
    {
      question: "How do I use Tailwind CSS?",
      answer:
        "To use Tailwind CSS, you need to include its CSS file in your HTML or import it in your JavaScript files using a bundler like webpack.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-indigo-500 ">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border rounded p-4  hover:text-indigo-500 cursor-pointer drop-shadow-lg"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-lg font-medium">{item.question}</h2>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
