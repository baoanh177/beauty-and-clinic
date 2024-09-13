import tw from "twin.macro";

export const ServiceItem = tw.li`flex min-h-[458px] basis-[343px] flex-col items-center rounded-[42px] bg-white pb-[52px] pl-[34px] pr-[35px] pt-[59px] shadow-[0px_25px_50px_25px_#f6f7ff]`;
export const ThumbnailWrapper = tw.figure``;
export const Image = tw.img``;
export const Content = tw.div`mt-[57px] flex flex-col items-center gap-1.5`;
export const Title = tw.h3`min-h-[37px] translate-x-[.5px] translate-y-[-.5px] pt-px text-center text-[18px] font-semibold leading-[22.5px] text-[color:var(--title-color)]`;
export const Desc = tw.p`mt-[1px] min-w-[200px] text-center text-[14px] font-normal leading-[21px] tracking-widest text-[color:var(--secondary-color)] lg:min-w-[274px]`;