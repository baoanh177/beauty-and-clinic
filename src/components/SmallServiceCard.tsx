import clsx from "clsx";
import learnMoreIcon from "@/assets/images/home2-learn-more-icon.png";

interface ISmallServiceCard {
  thumb: string;
  title: string;
  desc: string;
  className?: string;
}

const SmallServiceCard = ({ desc, thumb, title, className }: ISmallServiceCard) => {
  return (
    <>
      <div
        className={clsx(
          "h-[303px] w-[261px] rounded-[25px] border border-[#E2E2E2] bg-white pl-[35.6px] pr-[36px] pt-[30.5px] hover:border-[#9BA2E0]",
          className,
        )}
      >
        <img src={thumb} alt="" />
        <h3 className="mt-[24.3px] min-h-[37px] text-lg font-semibold leading-[22.5px] text-[#091156]">{title}</h3>
        <p className="max-w-[189px] translate-y-[.6px] text-sm leading-[20.9px] tracking-widest text-[#8B8B8B]">{desc}</p>
        <div className="mt-[17.5px] flex items-center text-sm font-semibold leading-[17.5px] text-[#FF64AE]">
          <div className="min-w-[90px]">Learn more</div>
          <img src={learnMoreIcon} alt="" className="pl-[1px]" />
        </div>
      </div>
    </>
  );
};

export default SmallServiceCard;
