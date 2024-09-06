import clsx from "clsx";
import { ReactNode } from "react";

interface IHeadingDescProps {
  children: ReactNode;
  className?: string;
}

const HeadingDesc = ({ children, className }: IHeadingDescProps) => {
  return (
    <>
      <p className={clsx("text-sm md:text-base leading-6 tracking-widest text-[#8B8B8B]", className)}>{children}</p>
    </>
  );
};

export default HeadingDesc;
