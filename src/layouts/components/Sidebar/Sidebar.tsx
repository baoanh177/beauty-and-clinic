import Button from "@/components/Button/Button";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import { IMenuItem } from "@/layouts/data";

interface ISidebarProps {
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
  items: IMenuItem[];
}

const Sidebar = ({ sidebar, setSidebar, items }: ISidebarProps) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={clsx(
          "fixed inset-0 z-[49] h-full w-full bg-black transition-[opacity,visibility]",
          sidebar ? "visible opacity-40" : "invisible opacity-0",
        )}
        onClick={() => setSidebar(false)}
      />
      <aside
        className={clsx(
          "fixed bottom-0 left-0 top-0 z-50 w-[400px] max-w-[90%] -translate-x-full bg-white p-10 transition-transform overflow-hidden",
          sidebar && "translate-x-0",
        )}
      >
        <div className="flex h-full flex-col">
          <nav>
            <ul className="flex flex-col gap-[30px] pl-5">
              {items.map((item, index) => {
                return (
                  <li key={index} className="flex shrink-0 cursor-pointer gap-[5px] text-[1.6rem] transition-colors hover:text-[#ff64ae]">
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </nav>
          <Button className="mt-auto min-w-[200px]">Contact</Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
