import React, { useEffect, useState } from "react";
import Sidebar from "../compo/Sidebar";
import { Loader } from "../compo/Loader";
import { auth } from "../compo/firebase";

export const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex ">
      <Sidebar userName={user.displayName} />
      <div className="container mx-auto px-4 mt-8  ">
        <div className="flex flex-col  mx-auto max-w-2xl p-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            {user.photoURL ? (
              <img
                className="object-cover w-full h-full"
                src={user.photoURL}
                alt="Profile"
              />
            ) : (
              <div className="bg-gray-300 w-full h-full"></div>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{user.displayName}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Bio</h3>
          <p>{user.bio}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p>{user.emailVerified}</p>
        </div>
        {/* Add more profile details as needed */}
        <div className="container mx-auto px-4 mt-8 text-center ">
          <h2 className="text-3xl font-semibold mb-4">
            Page Under Construction
          </h2>
          <p className="text-gray-500">
            We're working on adding more features to enhance your experience.
            Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};
