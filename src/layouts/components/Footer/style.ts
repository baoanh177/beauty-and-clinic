import tw from "twin.macro";

export const styles = {
  content: tw`flex items-center gap-[128px] pt-[225px] max-[1200px]:(flex-wrap gap-[30px] pt-2.5)`,
  row: tw`mt-[140px] flex justify-between max-[1200px]:(mt-[30px] flex-col items-center gap-5)`
}

export const Footer = tw.footer`
  relative mt-[70px] h-[705px] text-[#D7DBFF] 
  max-[1200px]:(h-[unset] bg-[#0d165c] px-0 py-14) 
  min-[1650px]:(h-[unset] bg-[#0d165c] px-0 py-14)
`;

export const Information = tw.div`mt-[2px] shrink-0 max-[1200px]:(max-w-full flex-wrap)`
export const InformationContent = tw.div`pl-[31px] max-[1200px]:pl-0`
export const FirstLine = tw.div`mt-[34px] text-[16px] font-normal leading-[24px] tracking-widest`
export const Strong = tw.strong`font-bold`
export const Address = tw.p`ml-[1px] mt-[22px] text-[14px] font-medium italic leading-[21px] tracking-widest`
export const Row = tw.div`mt-1 flex items-center gap-7 text-[14px] font-medium italic leading-[21px] tracking-widest max-[1200px]:flex-wrap`
export const Phone = tw.span`min-w-[140px]`
export const Email = tw.a`underline`

export const PageList = tw.ul`flex flex-col gap-[11px]`;
export const Item = tw.li`flex flex-nowrap text-[16px] font-normal leading-[24px] tracking-widest`;
export const ItemLink = tw.a`flex items-center gap-3`;
export const ItemLinkIcon = tw.i`text-[10px]`;

export const Pages = tw.div`
  flex gap-[206px] pl-[30px] pt-[3px] justify-start max-[396px]:(flex-col pr-0 !pl-0) 
  max-[1200px]:(grow flex-wrap justify-between gap-5 p-0 px-5)
`;

export const Col = tw.div`flex flex-col gap-[26px]`;
export const ColTitle = tw.h4`-translate-y-[2px] translate-x-[1px] text-[18px] font-semibold leading-[27px] tracking-widest -ml-1`;

export const Socials = tw.ul`flex items-center gap-[45px] translate-y-px max-[1200px]:(flex-wrap justify-center gap-y-5 gap-x-10)`;
export const SocialItem = tw.li``;
export const SocialImage = tw.img``;

export const Copyright = tw.p`translate-x-[1px] text-[16px] font-normal leading-[24px] tracking-widest max-[1200px]:text-center`;

export const Background = tw.img`absolute inset-x-0 bottom-0 z-[-1] w-full max-[1200px]:hidden min-[1650px]:hidden`
export const BottomBackground = tw.div`absolute inset-x-0 bottom-0 z-[-2] h-[125px] bg-[#0d165c]`;
