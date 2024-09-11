import Logo, { ILogoProps } from "@/components/Logo/Logo";
import Navbar, { INavbarProps } from "./Navbar";
import Button from "@/components/Button/Button";
import { Dispatch, SetStateAction } from "react";
import css from "./header.module.scss";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useArchive } from "@/hooks/useArchive";
import { IAuthInitialState } from "@/services/store/auth/auth.slice";
import UserName from "@/components/UserName";

interface IHeaderProps {
  setSidebar: Dispatch<SetStateAction<boolean>>;
  logo?: ILogoProps;
  nav?: INavbarProps;
  className?: string;
}

const Header = ({ setSidebar, logo, nav, className }: IHeaderProps) => {
  const { state } = useArchive<IAuthInitialState>("auth");
  const navigate = useNavigate();
  return (
    <>
      {/* Header */}
      <header className={clsx(css.header, "container", className)}>
        <Logo {...logo} />
        <div className={css.actions}>
          <Navbar {...nav} />
          {state.profile ? (
            <span>
              Hi, <Link children={<UserName />} to="/profile" className="transition-colors hover:text-pink-600" />
            </span>
          ) : (
            <Button className={css.contactBtn} onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </div>
        <div className="lg:hidden flex items-center gap-6">
          {state.profile ? (
            <span>
              Hi, <Link children={<UserName />} to="/profile" className="transition-colors hover:text-pink-600" />
            </span>
          ) : (
            <Link children="Login" to="/login" className="text-pink-600" />
          )}
          <div className={css.menuIcon} onClick={() => setSidebar(true)}>
            <i className="fa-solid fa-bars" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
