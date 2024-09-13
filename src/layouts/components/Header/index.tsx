import Logo, { ILogoProps } from "@/components/Logo/Logo";
import Navbar, { INavbarProps } from "../Navbar";
import Button from "@/components/Button/Button";
import { Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useArchive } from "@/hooks/useArchive";
import { IAuthInitialState } from "@/services/store/auth/auth.slice";
import UserName from "@/components/UserName";
import { DesktopActionsWrapper, MobileActionsWrapper, SidebarIcon, SidebarToggle, Header as StyledHeader } from "./style";
import clsx from "clsx";

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
      <StyledHeader {...{ className: clsx("container", className) }}>
        <Logo {...logo} />
        <DesktopActionsWrapper>
          <Navbar {...nav} />
          {state.profile ? (
            <span>
              Hi, <Link children={<UserName />} to="/profile" className="transition-colors hover:text-pink-600" />
            </span>
          ) : (
            <Button className="w-[157.6px] py-[10px] h-[52px] text-base font-semibold leading-6 tracking-[0.1em]" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </DesktopActionsWrapper>
        <MobileActionsWrapper>
          {state.profile ? (
            <span>
              Hi, <Link children={<UserName />} to="/profile" className="transition-colors hover:text-pink-600" />
            </span>
          ) : (
            <Link children="Login" to="/login" className="text-pink-600" />
          )}
          <SidebarToggle onClick={() => setSidebar(true)}>
            <SidebarIcon className="fa-solid fa-bars" />
          </SidebarToggle>
        </MobileActionsWrapper>
      </StyledHeader>
    </>
  );
};

export default Header;
