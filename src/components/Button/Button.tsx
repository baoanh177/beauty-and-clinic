import clsx from "clsx";
import { ReactNode } from "react";

interface IButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => unknown
}

const Button = ({ children, className, onClick }: IButtonProps) => {
  return (
    <>
      <button
        className={clsx(
          "rounded-full bg-[#ff64ae] px-[41px] py-[18px] text-[16px] font-semibold leading-6 tracking-[0.1em] text-white",
          className,
        )}
        onClick={() => onClick && onClick()}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
