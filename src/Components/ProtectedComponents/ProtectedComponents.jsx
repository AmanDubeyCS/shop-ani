import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { auth } from "../../Config/Firbase";
import Button from "../Button/Button";
import { IconMoodLookDown } from '@tabler/icons-react';

const ProtectedComponents = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);
  console.log(currentUser);

  if (currentUser === null) {
    return <div className="container text-center h-[80dvh] flex flex-col justify-center items-center w-full "><IconMoodLookDown stroke={2} size={100}/><p className="my-8 text-xl font-bold">Oops.... You are not logged in Go to the login page to continue</p><div className="w-2/4"><Link to="/login"><Button text="Login"/></Link></div></div>;
  }


  return <Outlet />
};

export default ProtectedComponents;
