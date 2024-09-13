import tw, { styled } from "twin.macro";

export const Aside = styled.aside`
${tw`fixed bottom-0 left-0 top-0 z-50 w-[400px] max-w-[90%] -translate-x-full overflow-hidden bg-white p-10 transition-transform`}
${({ sidebar }: { sidebar?: boolean }) => sidebar && tw`translate-x-0`}
`
export const MenuWrapper = tw.div`flex h-full flex-col`
export const Nav = tw.nav``
export const Menu = tw.ul`flex flex-col gap-[30px] pl-5`
export const MenuItem = tw.li`flex shrink-0 cursor-pointer gap-[5px] text-[1.6rem] transition-colors hover:text-[#ff64ae]` 

export const Overlay = styled.div`
  ${tw`fixed inset-0 z-[49] h-full w-full bg-black transition-[opacity,visibility]`}
  ${({ sidebar }: { sidebar?: boolean }) => sidebar ? tw`visible opacity-40` : tw`invisible opacity-0`}
`