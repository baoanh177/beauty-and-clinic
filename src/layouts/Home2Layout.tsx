import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import GoToTop from "@/components/GoToTop/GoToTop";

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
      <Header setSidebar={setSidebar} logo={{ font: "medium", type: "light"}} nav={{ type: "light" }}/>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <Outlet />
      {goToTop && <GoToTop />}
      {/* <Footer /> */}
    </>
  );
};

export default Home2Layout;
