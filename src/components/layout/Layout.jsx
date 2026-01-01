import { Outlet } from "react-router-dom";
// import HeaderPage from "./Header";
import FooterPage from "./Footer";
import ScrollToTop from "../shared/ScrollToTop";

const Layout = () => {
  return (
    <>
    <ScrollToTop/>
      <Outlet />
      <FooterPage />
    </>
  );
};

export default Layout;
