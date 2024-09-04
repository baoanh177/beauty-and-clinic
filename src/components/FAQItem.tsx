import { MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";
import icon from "@/assets/images/angle-up.png";
import clsx from "clsx";

export interface FAQItemProps {
  title: string;
  defaultOpen?: boolean;
  children: (props: { ref: MutableRefObject<any> }) => ReactNode;
  className?: string;
}

const FAQItem = ({ title, defaultOpen, children, className }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(!!defaultOpen);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<any>(null);

  useEffect(() => {
    if (contentRef && contentRef?.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [contentRef?.current]);
  return (
    <div className={clsx("flex w-full flex-col", className)}>
      <div
        className={clsx(
          "flex cursor-pointer items-center justify-between pl-[35px] pr-[19.5px] transition-[background-color,padding-bottom] hover:bg-[#fefefe] lg:items-start",
          isOpen && "pb-[13.8px]",
        )}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h4 className="font-semibold leading-6 tracking-widest text-[#091156]">{title}</h4>
        <img src={icon} alt="" className={clsx("transition-transform duration-500", isOpen ? "rotate-0" : "translate-y-[-1px] rotate-180")} />
      </div>
      <div className={clsx("h-[1px] w-0 bg-[#091156] transition-[width] duration-500", isOpen && "!w-full")}></div>
      <div
        className={clsx(
          "overflow-y-scroll md:overflow-hidden rounded-ee-[20px] rounded-es-[20px] bg-[#F6F7FF] transition-[height,padding] duration-500",
          isOpen ? "p-[30px_30px_30px_40px] md:p-[52px_63px_53px_76px]" : "p-[0_30px_0_40px] md:p-[0_63px_0_76px]",
        )}
        style={{
          height: isOpen ? `${contentHeight + 52 + 53}px` : 0,
        }}
      >
        {children({ ref: contentRef })}
      </div>
    </div>
  );
};

export default FAQItem;
