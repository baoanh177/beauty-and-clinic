import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Footer from "./components/Footer";
import GoToTop from "@/components/GoToTop";

const DefaultLayout = () => {
  const [sidebar, setSidebar] = useState(false);
  const [goToTop, setGoToTop] = useState(false);
  window.onscroll = () => {
    if (window.scrollY >= 2000 && !goToTop) {
      setGoToTop(true);
    } else if (window.scrollY < 2000 && goToTop) {
      setGoToTop(false);
    }
  };
  return (
    <>
      <Header setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <Outlet />
      {goToTop && <GoToTop />}
      <Footer />
    </>
  );
};

export default DefaultLayout;
