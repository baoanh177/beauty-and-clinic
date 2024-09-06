import folderIcon from "@/assets/images/folder-icon.png";
import caretRightIcon from "@/assets/images/caret-right.png";
import HeadingTitle from "./HeadingTitle";
import HeadingDesc from "./HeadingDesc";
import Button from "./Button/Button";
import clsx from "clsx";

export interface IBlogLargeCardProps {
  image: string;
  category: string;
  title: string;
  className?: string;
}

const BlogLargeCard = ({ title, category, image, className }: IBlogLargeCardProps) => {
  return (
    <>
      <div className={clsx("flex flex-col overflow-hidden rounded-[50px] bg-white shadow-[10px_13px_80px_14px_#F2F4FF]", className)}>
        <figure className="relative w-full overflow-hidden rounded-[50px_50px_0_0] bg-gray-50 pt-[62%]">
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        </figure>
        <article className="p-[26px_22px_60px_36px] lg:p-[56px_42px_100px_76px]">
          <div className="flex items-center gap-[15px] pt-1">
            <img src={folderIcon} alt="" className="h-[18px] w-[25px] translate-y-[-1px]" />
            <span className="font-semibold leading-5 text-[#FF64AE]">{category}</span>
          </div>
          <HeadingTitle children={title} className="mt-[20px] md:min-h-[99px]" />
          <HeadingDesc
            className="mt-3 min-h-[119px] max-w-[592px]"
            children="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…"
          />
          <Button className="mt-[13px] flex h-[58px] min-w-[226px] translate-x-[-.3px] translate-y-[-.5px] items-center justify-center gap-2 pl-[57px] shadow-[0px_17px_22px_0px_#FFEDF6]">
            <span>Read More</span> <img src={caretRightIcon} alt="" />
          </Button>
        </article>
      </div>
    </>
  );
};

export default BlogLargeCard;
