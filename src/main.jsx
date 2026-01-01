import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/Home";
import AboutPage from "./pages/about/About";
import ContactPage from "./pages/contact/Contact";
import MenuPage from "./pages/menu/Menu";
import Layout from "./components/layout/Layout";
import BlogPage from "./pages/blog/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));

const proRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/About",
        element: <AboutPage />,
      },
      {
        path: "/Blog",
        element: <BlogPage />,
      },
      {
        path: "/Contact",
        element: <ContactPage />,
      },
      {
        path: "/Menu",
        element: <MenuPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    {/* <CartProvider> */}
    <RouterProvider router={proRouter} />
    {/* </CartProvider> */}
  </React.StrictMode>
);
