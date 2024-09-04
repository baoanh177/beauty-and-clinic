import clsx from "clsx";
import twitter from "@/assets/images/twitter-icon.png";
import facebook from "@/assets/images/facebook-icon.png";
import ig from "@/assets/images/ig-icon.png";
import { useRef } from "react";

export interface IMemberCardProps {
  role: string;
  name: string;
  desc: string;
  avatar: string;
  className?: string;
}

const MemberCard = ({ role, name, desc, avatar, className }: IMemberCardProps) => {
  const cardRef = useRef<HTMLLIElement>(null);

  return (
    <>
      <li
        className={clsx(
          "group flex flex-col items-center rounded-[42px] pb-24 pt-[94px] text-center transition-[padding,border-radius,box-shadow,background-color] duration-700",
          "hover:bg-white hover:px-[77px] hover:shadow-[0px_25px_50px_25px_#F6F7FF]",
          "max-[1200px]:py-14 max-[480px]:w-full max-[480px]:px-[10px] max-[480px]:hover:px-[10px]",
          className,
        )}
        ref={cardRef}
      >
        <div className="h-[146px] w-[146px] shrink-0 overflow-hidden rounded-[50%]">
          <img src={avatar} alt="" />
        </div>
        <div className="mb-[50px] mt-[51px] transition-[margin-top] group-hover:mt-[51px]">
          <span className="text-center text-base font-semibold leading-[20px] text-[color:var(--primary-color)]">{role}</span>
          <h3 className="mb-[7px] mt-[12px] min-h-[37px] text-center text-[18px] font-semibold leading-[22.5px] text-[color:var(--title-color)]">
            {name}
          </h3>
          <p className="max-w-[270px] text-center text-[14px] font-normal leading-[21px] tracking-widest text-[color:var(--secondary-color)]">
            {desc}
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-[34px]">
          <li className="flex h-[49px] w-[49px] cursor-pointer items-center justify-center rounded-[50%] shadow-[-2px_6px_16px_-1px_#e6e9fd] transition-[background] duration-[0.2s] hover:bg-[#fafafa]">
            <img src={twitter} alt="" />
          </li>
          <li className="flex h-[49px] w-[49px] cursor-pointer items-center justify-center rounded-[50%] shadow-[-2px_6px_16px_-1px_#e6e9fd] transition-[background] duration-[0.2s] hover:bg-[#fafafa]">
            <img src={facebook} alt="" />
          </li>
          <li className="flex h-[49px] w-[49px] cursor-pointer items-center justify-center rounded-[50%] shadow-[-2px_6px_16px_-1px_#e6e9fd] transition-[background] duration-[0.2s] hover:bg-[#fafafa]">
            <img src={ig} alt="" />
          </li>
        </ul>
      </li>
    </>
  );
};

export default MemberCard;
