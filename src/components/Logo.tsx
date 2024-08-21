import clsx from "clsx";

interface ILogoProps {
  type?: "dark" | "light";
}

const Logo = ({ type = "dark" }: ILogoProps) => {
  return (
    <>
      <div className="logo">
        <div className="logo-icon">
          <div className="inside-icon-1" />
          <div className="inside-icon-2" />
          <div
            className={clsx("absolute right-0 top-1/2 h-[1.1em] w-[4em] -translate-y-1/2 translate-x-[40%] rounded-full", {
              "bg-[#091156]": type == "dark",
              "bg-[#ffffff]": type == "light",
            })}
          />
        </div>
        <span className="hidden text-[24px] font-bold leading-9 tracking-widest lg:inline">Beautice</span>
      </div>
    </>
  );
};

export default Logo;
