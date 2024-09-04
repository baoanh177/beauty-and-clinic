import clsx from "clsx";
import { Link } from "react-router-dom";
import css from "./header.module.scss";
import { IMenuItem } from "@/layouts/data";

export interface INavbarProps {
  type?: "dark" | "light";
  items?: IMenuItem[];
}

const Navbar = ({ type = "dark", items = []}: INavbarProps) => {
  return (
    <>
      <nav className={clsx(css.navbar, css[type])}>
        <ul className={css.menu}>
          {items.map((item, index) => {
            const isActive = item.path === "/"
            return (
              <li key={index} className={clsx(css.menuItem, isActive && css.active)}>
                <Link to={item.path}>{item.name}</Link>
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
