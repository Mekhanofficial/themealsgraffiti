import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/Home";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutPage from "./pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import MenuPage from "./pages/Menu";
import Layout from "./components/Layout";

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
