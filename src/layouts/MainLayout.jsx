import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
// import { useAuth } from "../providers/AuthProvider";

const MainLayout = () => {
  return (
    <div className="bg-white">
      <main className="">
        <Outlet />
      </main>

      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default MainLayout;
