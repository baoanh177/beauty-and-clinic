import clsx from "clsx";
import { ReactNode } from "react";

interface IHeadingTitleProps {
  children: ReactNode;
  className?: string;
}

const HeadingTitle = ({ children, className }: IHeadingTitleProps) => {
  return (
    <>
      <h2 className={clsx("text-2xl font-semibold max-md:!min-h-0 leading-[35px] text-[#091156] md:text-4xl md:leading-[45px]", className)}>{children}</h2>
    </>
  );
};

export default HeadingTitle;
