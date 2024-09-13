import tw, { styled } from "twin.macro";

export const Nav = tw.nav``

export const Menu = tw.ul`flex items-center`;

export const MenuItem = styled.li`
  ${tw`flex cursor-pointer items-center gap-[4.3px] text-left text-[16px] font-medium leading-[24px] tracking-[0.1em]`}
  ${({ isActive, type = "dark" }: { isActive?: boolean; type?: "dark" | "light" }) => {
    if (type === "dark") return isActive ? tw`text-[color:var(--active-color)]` : tw`text-[color:var(--secondary-color)] hover:text-inherit`;
    if (type === "light") return isActive ? tw`text-[#D8DCFF]` : tw`text-[#D8DCFF] hover:text-inherit`;
  }}
`;

export const ChildMenu = tw.div`py-2 text-sm text-gray-700`

export const PlusIcon = tw.i`translate-x-[-.4px] translate-y-[2.2px] text-[9px]`

export const ChildMenuWrapper = styled.div`
  ${tw`absolute top-full z-30 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow transition-[visibility,opacity]`}
  ${({ detailMenu }: { detailMenu?: boolean }) => detailMenu ? tw`visible opacity-100` : tw`invisible opacity-0`}
`