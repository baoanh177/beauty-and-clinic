import clsx from "clsx";
import { ReactNode } from "react";

interface IHeadingTitleProps {
  children: ReactNode;
  className?: string;
}

const HeadingTitle = ({ children, className }: IHeadingTitleProps) => {
  return (
    <>
      <h2 className={clsx("text-4xl font-semibold leading-[45px] text-[#091156]", className)}>
        {children}
      </h2>
    </>
  );
};

export default HeadingTitle;
