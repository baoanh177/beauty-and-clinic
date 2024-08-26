import clsx from "clsx";
import css from "./logo.module.scss"

export interface ILogoProps {
  type?: "dark" | "light";
  font?: "bold" | "medium"
}

const Logo = ({ type = "dark", font = "bold" }: ILogoProps) => {
  return (
    <>
      <div className={clsx(css.logo, css[type], "")}>
        <div className={css.logoIcon}>
          <div className={css.insideIcon1} />
          <div className={css.insideIcon2} />
          <div
            className={clsx(css.insideIcon3, {
              "!bg-[#091156]": type == "dark",
              "!bg-[#ffffff]": type == "light",
            })}
          />
        </div>
        <span className={clsx(font === "bold" ? css.brandNameBold : css.brandNameMedium, "drop-shadow-2xl shadow-red-600")}>Beautice</span>
      </div>
    </>
  );
};

export default Logo;
