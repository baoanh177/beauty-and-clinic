import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import GoToTop from "@/components/GoToTop/GoToTop";
import Footer from "./components/Footer/Footer";
import { menu2 } from "./data";

const Home2Layout = () => {
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
      <Header
        setSidebar={setSidebar}
        logo={{ font: "medium", type: "light" }}
        nav={{ type: "light", items: menu2 }}
        className="!mt-[40px]"
      />
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} items={menu2} />
      <Outlet />
      {goToTop && <GoToTop />}
      <Footer className="mt-[132px]" />
    </>
  );
};

export default Home2Layout;
