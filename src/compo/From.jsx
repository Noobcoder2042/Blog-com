
export const From = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500">
      <div className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-xl rounded-xl p-8 shadow-lg ">
        <form action="/" className="p-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Contact<span className="text-indigo-900"> Us 🤙🏼</span>
          </h1>
          <div className="mb-4">
            <input
              className="w-full px-2 py-1 border border-indigo-500 outline-none rounded"
              type="text"
              name="name"
              placeholder="Full name"
              required
            />
            <input
              className="w-full px-2 py-1 border border-indigo-500 outline-none mt-2 rounded"
              type="email"
              name="name"
              placeholder="Email"
              required
            />
            <input
              className="w-full px-2 py-1 border border-indigo-500 outline-none mt-2 rounded"
              type="number"
              name="name"
              placeholder="Phone number"
              required
            />
          </div>
          <p className="mb-2">Message</p>
          <div className="mb-4">
            <textarea
              className="w-full px-2 py-1 border border-indigo-500 outline-none rounded"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-500 text-white font-semibold hover:bg-indigo-500 rounded-xl "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
