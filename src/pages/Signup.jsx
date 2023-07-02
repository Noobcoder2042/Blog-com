import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../compo/firebase";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const Signup = () => {
  const nav = useNavigate();
  const provider = new GoogleAuthProvider();
  const [signupValue, setsignupValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const singupHandelr = () => {
    console.log(signupValue);

    createUserWithEmailAndPassword(
      auth,
      signupValue.email,
      signupValue.password
    )
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: signupValue.name,
        });
        nav("/user/blog");
        console.log(res);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const signWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        nav("/user/blog");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <p className="text-center text-sm text-gray-700 font-semibold mt-4 m-4 ">
          To access more features and functionality, I recommend signing in with
          your Google account. By signing in, you can unlock additional options
          and personalize your experience. Singing in with Google will enable
          you to utilize various services and applications seamlessly. So, go
          ahead and sign in with your Google account to enjoy the full benefits
          of the platform!
        </p>
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-indigo-500">BlogCom</h3>
            <span>Your Favorite Blog Site 💜</span>
          </a>
        </div>
        <h3 className="text-xl font-bold m-4 bg-white p-4 rounded-md shadow-md ">
          <span className=" text-indigo-500">Enter </span>your details to
          register.
        </h3>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  required
                  onChange={(e) =>
                    setsignupValue((prv) => ({ ...prv, name: e.target.value }))
                  }
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  onChange={(e) =>
                    setsignupValue((prv) => ({ ...prv, email: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  required
                  onChange={(e) =>
                    setsignupValue((prv) => ({
                      ...prv,
                      password: e.target.value,
                    }))
                  }
                  type="password"
                  name="password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>
            <div className=" text-center my-5 text-red-700 text-xl ">
              {error}
            </div>

            <div className="flex items-center mt-4">
              <button
                onClick={singupHandelr}
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <Link
                className="text-indigo-500 hover:underline"
                to="/userLog/login"
              >
                Log in
              </Link>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
            <button
              onClick={signWithGoogle}
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-indigo-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
