import tw, { css, styled } from "twin.macro";

export const Section = tw.section`mt-[125px]`
export const HeadingWrapper = tw.div`flex flex-col items-center justify-between pr-5 text-center lg:flex-row lg:text-left`;
export const HeadingInner = tw.div`flex flex-col gap-3`;
export const Image = tw.img`absolute inset-0 h-full w-full object-cover`;
export const ImageList = tw.div`mt-[75px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[38px_36px]`;
export const ImageWrapper = styled.figure`
  ${tw`relative overflow-hidden rounded-[20px] bg-gray-50 pt-[58.98%]`}
  ${({ hiddenOnMobile, hiddenOnTablet }: Partial<Record<"hiddenOnMobile" | "hiddenOnTablet", boolean>>) =>
    hiddenOnMobile ? tw`hidden sm:block` : hiddenOnTablet && tw`hidden lg:block`}
`;