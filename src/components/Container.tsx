import clsx from "clsx";
import { ReactNode } from "react";

const Container = ({ className, children }: { className?: string; children?: ReactNode }) => {
  return (
    <>
      <div className={clsx("container", className)}>{children}</div>
    </>
  );
};

export default Container;
