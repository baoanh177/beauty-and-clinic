import Logo, { ILogoProps } from "@/components/Logo/Logo";
import Navbar from "./Navbar";
import Button from "@/components/Button/Button";
import { Dispatch, SetStateAction } from "react";
import css from "./header.module.scss";
import clsx from "clsx";

interface IHeaderProps {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  logo?: ILogoProps;
  nav?: { type: "dark" | "light" }
}

const Header = ({ setSidebar, logo, nav }: IHeaderProps) => {
  return (
    <>
      {/* Header */}
      <header className={clsx(css.header, "container")}>
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
