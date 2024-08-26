import learnMoreIcon from "@/assets/images/home2-learn-more-icon.png";
import clsx from "clsx";
interface IBlogCardProps {
  thumb: string;
  title: string;
  content: string;
  className?: string;
}

const BlogCard = ({ content, thumb, title, className }: IBlogCardProps) => {
  return (
    <>
      <div className={clsx("flex flex-col rounded-[25px] bg-white shadow-[0px_25px_50px_5px_#F6F7FF] lg:min-w-[347px] overflow-hidden", className)}>
        <figure className="h-[249px]">
          <img src={thumb} className="h-full w-full object-cover" alt="" />
        </figure>
        <div className="mt-[55px] pb-[72px] pl-[39px]">
          <h3 className="min-h-[58px] pr-[21px] text-lg font-semibold leading-[22.5px] text-[#091156]">{title}</h3>
          <p className="min-h-[74px] pr-[38px] text-sm leading-[21px] tracking-widest text-[#8B8B8B]">{content}</p>
          <div className="mt-[15px] flex items-center text-sm font-semibold leading-[17.5px] text-[#FF64AE]">
            <div className="min-w-[90px]">Learn more</div>
            <img src={learnMoreIcon} alt="" className="pl-[1px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
