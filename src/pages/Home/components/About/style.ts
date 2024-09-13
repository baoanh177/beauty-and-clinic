import { styles } from "@/styles/common.style";
import tw, { styled } from "twin.macro";

export const Section = tw.section`relative mt-[113px] -z-10`

export const Container = styled.div`
  ${styles.container}
  ${tw`flex items-end gap-y-10 max-[1280px]:(flex-col items-center) max-[1024px]:(flex-col items-center gap-10)`}
`

export const DesktopImageWrapper = tw.figure`w-[476px] h-[350px] mb-[4px] rounded-[50px] align-baseline shadow-[0px_0px_50px_25px_#FFFFFF]`;
export const MobileImageWrapper = tw.figure`hidden mt-5 max-[1024px]:block`;
export const Image = tw.img``;

export const WatchBtnWrapper = tw.div`flex items-center gap-[13px] mt-[1px] cursor-pointer`;
export const WatchBtnText = tw.span`block font-semibold translate-y-[-1px] leading-[24px] tracking-widest text-[color:var(--secondary-color)]`;

export const LearnMoreBtn = styled.button`
  ${styles.button}
  ${tw`min-w-[200px] h-[58.36px] pt-[15px] pb-[15.06px] pl-[45px] shadow-[0px_17px_22px_0px_#FFEDF6]`}
`;

export const Actions = tw.div`flex items-center gap-11 mt-[52px] translate-x-[-.5px] max-[500px]:(flex-col-reverse gap-5 mt-5)`;
export const Paragraph = tw.p``;
export const Desc = tw.div`flex flex-col max-w-[483px] gap-6 mt-3`;
export const Title = styled.h2`
  ${styles.title}
  ${tw`min-h-[52px] max-w-[664px] mt-[10px]`}
`;
export const Subtitle = tw.span`text-[16px] font-semibold leading-[20px] text-left text-[color:var(--primary-color)]`;

export const Content = tw.article`w-[664px] mt-5 max-[1280px]:(flex flex-col text-center items-center) max-[1024px]:(flex flex-col items-center text-center w-[unset])`;

export const Background = tw.img`absolute right-[0] z-[-1] top-[0] translate-y-[-333px]`