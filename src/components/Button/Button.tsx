import clsx from "clsx";
import { ReactNode } from "react";

interface IButtonProps {
  children?: ReactNode;
  className?: string;
}

const Button = ({ children, className }: IButtonProps) => {
  return (
    <>
      <button
        className={clsx(
          "rounded-full bg-[#ff64ae] px-[41px] py-[18px] text-[16px] font-semibold leading-6 tracking-[0.1em] text-white",
          className,
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
