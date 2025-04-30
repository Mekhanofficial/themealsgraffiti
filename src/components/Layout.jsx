import { Outlet } from "react-router-dom";
import HeaderPage from "./Header";
import FooterPage from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
    <ScrollToTop/>
      {/* <HeaderPage /> */}
      <Outlet />
      <FooterPage />
    </>
  );
};

export default Layout;
