import clsx from "clsx";
import { Link } from "react-router-dom";
import css from "./header.module.scss";
import { IMenuItem } from "@/layouts/data";
import { useState } from "react";

export interface INavbarProps {
  type?: "dark" | "light";
  items?: IMenuItem[];
}

const Navbar = ({ type = "dark" }: INavbarProps) => {
  const [detailMenu, setDetailMenu] = useState(false);
  return (
    <>
      <nav className={clsx(css.navbar, css[type])}>
        <ul className={css.menu}>
          <li className={clsx(css.menuItem, css.active, "relative")} onClick={() => setDetailMenu(!detailMenu)}>
            <div>Home</div>
            <i className={clsx(css.plusIcon, "fa-solid fa-plus")}></i>
            <div
              id="dropdown"
              className={clsx(
                "absolute top-full z-30 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow transition-[visibility,opacity]",
                detailMenu ? "visible opacity-100" : "invisible opacity-0",
              )}
            >
              <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/home2" className="block px-4 py-2 hover:bg-gray-100">
                    Home 2
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="block px-4 py-2 hover:bg-gray-100">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={clsx(css.menuItem)}>
            <Link to="/about">About</Link>
          </li>
          <li className={clsx(css.menuItem)}>
            <Link to="/service">Service</Link>
          </li>
          <li className={clsx(css.menuItem)}>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className={clsx(css.menuItem)}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
