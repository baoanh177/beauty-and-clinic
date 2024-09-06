import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import GoToTop from "@/components/GoToTop/GoToTop";
import { menu1 } from "./data";

const BlogLayout = () => {
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
      <Header setSidebar={setSidebar} nav={{ type: "dark", items: menu1 }}/>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} items={menu1} />
      <Outlet />
      {goToTop && <GoToTop />}
      <Footer className="mt-[56px]"/>
    </>
  );
};

export default BlogLayout;
