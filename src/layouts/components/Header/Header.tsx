import Logo, { ILogoProps } from "@/components/Logo/Logo";
import Navbar, { INavbarProps } from "./Navbar";
import Button from "@/components/Button/Button";
import { Dispatch, SetStateAction } from "react";
import css from "./header.module.scss";
import clsx from "clsx";

interface IHeaderProps {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  logo?: ILogoProps;
  nav?: INavbarProps;
  className?: string;
}

const Header = ({ setSidebar, logo, nav, className }: IHeaderProps) => {
  return (
    <>
      {/* Header */}
      <header className={clsx(css.header, "container", className)}>
        <Logo {...logo} />
        <div className={css.actions}>
          <Navbar {...nav}/>
          <Button className={css.contactBtn}>Contact</Button>
        </div>
        <div className={css.menuIcon} onClick={() => setSidebar(true)}>
          <i className="fa-solid fa-bars" />
        </div>
      </header>
    </>
  );
};

export default Header;
