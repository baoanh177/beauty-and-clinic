import { styles } from "@/styles/common.style";
import tw, { styled } from "twin.macro";

export const Section = tw.section`relative mt-[145px]`

export const Container = styled.div`
  ${styles.container}
  ${tw`flex items-center gap-[100px] max-[1024px]:flex-col`}
`

export const Desc = styled.p`
  ${styles.desc}
  ${tw`min-h-[28px]`}
`;
export const Title = styled.h2`
  ${styles.title}
  ${tw`min-h-[97px] max-w-[404px]`}
`;
export const Subtitle = tw.span`translate-x-[-1px] font-semibold leading-[20px] ml-[2px] text-[color:var(--primary-color)] max-[1024px]:text-center`;
export const Heading = tw.div`ml-px flex flex-col gap-3 max-[1024px]:(flex flex-col items-center text-center)`
export const Content = tw.article`max-w-[520px]`
export const ImageWrapper = tw.figure`mt-[38px] translate-x-[.95px] translate-y-[.5px] shrink-0`
export const Image = tw.img``
export const Background = tw.img`absolute z-[-1] top-0  left-0 -translate-y-[207px]`