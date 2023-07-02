import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { auth } from "../compo/firebase";
import { Errorpage } from "./Errorpage";
import { Loader } from "./Loader";

export const Priveteroutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <>
      {isLoggedIn ? (
        <Outlet />
      ) : (
        <>
          <Errorpage text={"The page you’re looking for doesn’t exist."} />
        </>
      )}
    </>
  );
};
