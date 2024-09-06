import starIcon from "@/assets/images/star-icon.png"
import clsx from "clsx";
import { MutableRefObject } from "react";
export interface ITestimonialItemProps {
  image: string;
  content: string;
  star: 1 | 2 | 3 | 4 | 5;
  className?: string;
  ref?: MutableRefObject<unknown>;
  width: string;
}

const TestimonialItem = ({ image, content, star, className, width }: ITestimonialItemProps) => {
  return (
    <>
      <div className={clsx("flex flex-col items-center text-center shrink-0", className)} style={{ width }}>
        <img src={image} className="h-[73px] w-[73px] rounded-circle object-cover shrink-0" alt="" />
        <p className="max-w-[544px] text-sm leading-[21px] tracking-widest text-[#8B8B8B] mt-[44px]">{content}</p>
        <div className="mt-[34px] flex h-[25px] gap-[11px]">
          {[...Array(star)].map((_, index) => {
            return <img key={index} src={starIcon} alt="" />
          })}
        </div>
      </div>
    </>
  );
};

export default TestimonialItem;
