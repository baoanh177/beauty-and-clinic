import { Link } from "react-router-dom";
import { IMenuItem } from "@/layouts/data";
import { useState } from "react";
import { ChildMenu, ChildMenuWrapper, Menu, MenuItem, Nav, PlusIcon } from "./style";
// @ts-ignore
import tw from "twin.macro"; 

export interface INavbarProps {
  type?: "dark" | "light";
  items?: IMenuItem[];
}

const Navbar = ({ type = "dark" }: INavbarProps) => {
  const [detailMenu, setDetailMenu] = useState(false);
  return (
    <>
      <Nav>
        <Menu>
          <MenuItem
            type={type}
            isActive
            tw="relative mr-[44.2px] translate-x-[1.6px] font-semibold tracking-[0.098em]"
            onClick={() => setDetailMenu(!detailMenu)}
          >
            <div>Home</div>
            <PlusIcon className="fa-solid fa-plus" />
            <ChildMenuWrapper detailMenu={detailMenu} id="dropdown">
              <ChildMenu>
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
              </ChildMenu>
            </ChildMenuWrapper>
          </MenuItem>
          <MenuItem tw="mb-[1px] mr-[43.5px]" type={type}>
            <Link to="/about">About</Link>
          </MenuItem>
          <MenuItem tw="mr-[45px]" type={type}>
            <Link to="/service">Service</Link>
          </MenuItem>
          <MenuItem tw="mr-[46px]" type={type}>
            <Link to="/gallery">Gallery</Link>
          </MenuItem>
          <MenuItem type={type}>
            <Link to="/blog">Blog</Link>
          </MenuItem>
        </Menu>
      </Nav>
    </>
  );
};

export default Navbar;
