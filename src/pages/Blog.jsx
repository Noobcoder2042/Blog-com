import React, { useEffect, useState } from "react";
import { auth } from "../compo/firebase";
import { Loader } from "../compo/Loader";
import Sidebar from "../compo/Sidebar";
import { Feed } from "../compo/Feed";

export const Blog = () => {
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
    <div className="flex">
      <div >
      <Sidebar userName={user.displayName} />
      </div>
      

      {/* Render the rest of your blog content */}
      <Feed />
    </div>
  );
};
