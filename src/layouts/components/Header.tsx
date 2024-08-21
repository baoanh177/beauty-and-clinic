import Logo from "@/components/Logo";
import Navbar from "./Navbar";
import Button from "@/components/Button";
import { Dispatch, SetStateAction } from "react";

interface IHeaderProps {
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ sidebar, setSidebar }: IHeaderProps) => {
  return (
    <>
      {/* Header */}
      <header className="header container">
        <Logo />
        <div className="actions">
          <Navbar />
          <Button className="contact-btn">Contact</Button>
        </div>
        <div className="menu-icon" onClick={() => setSidebar(true)}>
          <i className="fa-solid fa-bars" />
        </div>
      </header>
    </>
  );
};

export default Header;
