import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
// import { useAuth } from "../providers/AuthProvider";

const MainLayout = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default MainLayout;
