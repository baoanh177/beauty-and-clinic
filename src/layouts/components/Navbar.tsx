import plusIcon from "@/assets/images/plus-icon.png";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { menu } from "../data";

const Navbar = () => {
  const path = useLocation().pathname;
  return (
    <>
      <nav className="navbar">
        <ul className="menu">
          {menu.map((item, index) => {
            const isActive = item.path === path;
            return (
              <li key={index} className={clsx("menu-item", isActive && "active")}>
                <span>{item.name}</span>
                {isActive && <img src={plusIcon} alt="" />}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
