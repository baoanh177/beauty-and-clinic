import clsx from "clsx";
import learnMoreIcon from "@/assets/images/home2-learn-more-icon.png";

interface ISmallServiceCard {
  thumb: string;
  title: string;
  desc: string;
  isActive?: boolean;
  className?: string;
}

const SmallServiceCard = ({ desc, thumb, title, isActive, className }: ISmallServiceCard) => {
  return (
    <>
      <div
        className={clsx(
          "h-[303px] w-[261px] rounded-[25px] border px-[36px] pt-[31px]",
          className,
          isActive ? "border-[#9BA2E0]" : "border-[#E2E2E2]",
        )}
      >
        <img src={thumb} alt="" />
        <h3 className="mt-[24px] min-h-[37px] text-lg font-semibold leading-[22.5px] text-[#091156]">{title}</h3>
        <p className="max-w-[189px] text-sm leading-[21px] tracking-widest text-[#8B8B8B]">{desc}</p>
        <div className="mt-[18px] flex items-center text-sm font-semibold leading-[17.5px] text-[#FF64AE]">
          <div className="min-w-[90px]">Learn more</div>
          <img src={learnMoreIcon} alt="" className="pl-[1px]" />
        </div>
      </div>
    </>
  );
};

export default SmallServiceCard;
