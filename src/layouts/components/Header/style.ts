import tw from "twin.macro";

export const Header = tw.header`
  relative z-50 !mt-5 flex h-[45px] translate-x-[-.6px] translate-y-[.2px] 
  items-center justify-between px-5 py-0 lg:!mt-[41px] lg:h-[63px] xl:px-0 lg:py-1
`;

export const MobileActionsWrapper = tw.div`flex items-center gap-6 lg:hidden`

export const DesktopActionsWrapper = tw.div`mt-[-3px] hidden items-center gap-[51px] lg:flex`

export const SidebarToggle = tw.div`block cursor-pointer text-[16px] lg:hidden`

export const SidebarIcon = tw.i``