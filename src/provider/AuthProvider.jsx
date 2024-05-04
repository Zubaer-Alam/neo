"use client";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = (props) => {
  const [userIdData, setUserIdData] = useState("");
  const [tokenData, setTokenData] = useState("");
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    setUserIdData(userId);
    setTokenData(token);
    setIsUserDataLoaded(true);
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          userIdData,
          setUserIdData,
          tokenData,
          setTokenData,
          isUserDataLoaded,
        }}
      >
        {isUserDataLoaded ? props.children : null}
      </AuthContext.Provider>
    </>
  );
};