import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { menu } from "../../data";
import css from "./header.module.scss"

const Navbar = ({ type = "dark" }: { type?: "dark" | "light"}) => {
  const path = useLocation().pathname;
  return (
    <>
      <nav className={clsx(css.navbar, css[type])}>
        <ul className={css.menu}>
          {menu.map((item, index) => {
            const isActive = item.path === path;
            return (
              <li key={index} className={clsx(css.menuItem, isActive && css.active)}>
                <span>{item.name}</span>
                {isActive && <i className={clsx(css.plusIcon, "fa-solid fa-plus")}></i>}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
