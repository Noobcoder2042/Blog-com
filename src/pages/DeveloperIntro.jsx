import React from "react";

const DeveloperIntro = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <img
        src="https://scontent.frdp1-2.fna.fbcdn.net/v/t39.30808-6/329940886_718770249653825_2819741369298498895_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wt4o-X9YA9IAX_dfiry&_nc_ht=scontent.frdp1-2.fna&oh=00_AfBjX45qJRk13FXZQWkzHnxj2TQJrDEwMxwYPb-tEg4RxA&oe=64A5BCBE"
        alt="Rudra Chandra"
        className="w-32 h-32 rounded-full mb-4 border-4 border-purple-500 animate-spin-slow"
      />
      <h2 className="text-4xl font-bold mb-4 text-purple-700">Rudra Chandra</h2>
      <p className="text-gray-700 text-lg text-center leading-loose">
        Hi, I'm Rudra Chandra, the mastermind behind the amazing BlogCom web
        app! 🚀 I created this platform to revolutionize the way people express
        their thoughts and connect with others through blogging.
      </p>
      <p className="text-gray-700 text-lg text-center leading-loose mt-4">
        With BlogCom, you can unleash your creativity, share your stories, and
        engage in vibrant discussions with fellow bloggers. It's all about
        bringing ideas to life and building a supportive community.
      </p>
      <p className="text-gray-700 text-lg text-center leading-loose mt-4">
        Strap in and get ready for an unforgettable blogging experience! Feel
        free to reach out if you have any questions or if you simply want to
        geek out about web development. Let's make the web a more awesome place
        together! ✨
      </p>
    </div>
  );
};

export default DeveloperIntro;
