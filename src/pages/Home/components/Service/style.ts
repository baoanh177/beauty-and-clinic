import { styles } from "@/styles/common.style";
import tw, { styled } from "twin.macro";

export const Container = styled.section`
  ${styles.container}
  ${tw`mt-[140px]`}
`
export const Services = tw.ul`mt-[85px] flex gap-[55.5px] max-[1280px]:(flex-wrap justify-center gap-5)`
export const Desc = styled.p`
  ${styles.desc}
  ${tw`mt-[-1px] max-w-[848px] text-center`}
`
export const Title = styled.h2`
  ${styles.title}
  ${tw`min-h-[97px] max-w-[450px] text-center`}
`
export const Subtitle = tw.span`text-center text-[16px] font-semibold leading-[20px] text-[#ff64ae]`
export const Heading = tw.div`flex flex-col items-center gap-[12px]`