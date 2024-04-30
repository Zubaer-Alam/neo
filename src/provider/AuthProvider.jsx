"use client";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = (props) => {

  const [userIdData, setUserIdData] = useState("");
  const [tokenData, setTokenData] = useState("");
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    setUserIdData(userId);
    setTokenData(token)
  }, []); 

  return (
    <>
      <AuthContext.Provider
        value={{
        userIdData,
        setUserIdData,
        tokenData,
        setTokenData
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </>
  );
};
