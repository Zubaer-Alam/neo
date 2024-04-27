import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Products from "../components/Products";
import Tabs from "../components/Modal";
import EditProduct from "../pages/EditProduct";
import AddProduct from "../pages/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      // {
      //   path: "/products",
      //   element: <Products />,
      // },
         {
        path: "/editProduct",
        element: <EditProduct />,
      },
      {
        path: "/addProduct",
        element: <AddProduct/>,
      },
      {
        path: "/tabs",
        element: <Tabs />,
      },
    ],
  },

  {
    path: "/login",
    element: <HomePage />,
  },
]);

export default router;
