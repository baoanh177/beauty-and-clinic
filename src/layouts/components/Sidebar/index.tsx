import Button from "@/components/Button/Button";
import { Dispatch, SetStateAction } from "react";
import { IMenuItem } from "@/layouts/data";
import { useNavigate } from "react-router-dom";
import { Aside, Menu, MenuItem, MenuWrapper, Nav, Overlay } from "./style";

interface ISidebarProps {
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
  items: IMenuItem[];
}

const Sidebar = ({ sidebar, setSidebar, items }: ISidebarProps) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Sidebar */}
      <Overlay sidebar={sidebar} onClick={() => setSidebar(false)} />
      <Aside sidebar={sidebar}>
        <MenuWrapper>
          <Nav>
            <Menu>
              {items.map((item, index) => {
                return (
                  <MenuItem key={index} onClick={() => navigate(item.path)}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Menu>
          </Nav>
          <Button
            className="mt-auto min-w-[200px]"
            onClick={() => {
              navigate("/contact");
              setSidebar(false);
            }}
          >
            Contact
          </Button>
        </MenuWrapper>
      </Aside>
    </>
  );
};

export default Sidebar;
