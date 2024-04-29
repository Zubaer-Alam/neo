import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { AuthProvider } from "../provider/AuthProvider";

const MainLayout = () => {
  return (
    <div className="bg-white">
       <AuthProvider>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
      </AuthProvider>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default MainLayout;
