import tw, { styled } from "twin.macro";
import { styles as commonStyles } from "@/styles/common.style";

export const Container = styled.div`
  ${commonStyles.container}
  ${tw`relative !mt-[156px] pb-[136px] pl-[39px] max-[1024px]:mt-[100px]`}
`

export const Inner = tw.div`flex items-center gap-[22px] max-[1024px]:(flex-col pb-5)`;
export const Content = tw.article`mt-[-20px] shrink-0 translate-y-[-1px]`;
export const Title = styled.h2`
  ${commonStyles.title}
  ${tw`min-h-[127px] max-w-[430px] text-left text-[48px] font-semibold leading-[60px]`}
`;
export const Desc = styled.p`
  ${commonStyles.desc}
  ${tw`min-h-[54px] max-w-[474px] pt-[.1px] translate-y-[.6px] text-left text-[16px] 
    font-medium leading-[24px] tracking-widest text-[color:var(--title-color)]`}
`;
export const Button = styled.button`
  ${commonStyles.button}
  ${tw`mt-[27px] min-h-[58.36px] w-[200px] translate-y-[1.4px] pb-[15.06px] pl-[41.5px] 
    pr-0 pt-[16px] text-left leading-[26px] shadow-[0px_17px_22px_0px_#FFEDF6]`}
`;

export const ImageWrapper = tw.figure``;
export const Pagination = tw.div`absolute inset-x-0 bottom-[-8px] flex translate-x-[.5px] items-center justify-center gap-2`;
export const PaginationItem = styled.div`
  ${tw`h-[3.09px] w-[14.82px] rounded-[99px] bg-[#eee]`}
  ${({ isActive }: { isActive?: boolean }) => isActive && tw`h-[8.15px] w-[25.31px] rounded-[99px] bg-[color:var(--active-color)]`}
`;

export const Background = tw.img`absolute left-0 top-0 z-[-1]`;
