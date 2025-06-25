import { createBrowserRouter } from "react-router";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Career from "./../pages/Career/Career";
import About from "./../pages/About/About";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import HomeLayout from "../Layout/HomeLayout";
import { Component } from "react";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Error></Error>,
    children: [
      { index: true, Component: Home },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/career",
        Component: Career,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
