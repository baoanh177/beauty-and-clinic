import tw from "twin.macro";

export const styles = {
  button: tw`
    text-[color:var(--white-color)] bg-[var(--primary-color)] text-[16px] font-semibold 
    leading-[24px] tracking-widest text-center cursor-pointer px-[41px] rounded-[999px] 
    border-[none] hover:opacity-95 max-[1024px]:(min-h-[40px] py-2.5)`,
  container: tw`max-w-[1140px] max-[1280px]:(px-5 py-0) mx-auto`,
  title: tw`text-[color:var(--title-color)] text-[36px] font-semibold leading-[45px]`,
  desc: tw`text-[16px] font-normal leading-[24px] tracking-widest text-[color:var(--secondary-color)]`,
  goToTop: tw`max-[1024px]:(right-[50px] bottom-[70px])`
}