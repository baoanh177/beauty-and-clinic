import background from "@/assets/images/home2-hero.png";
import playIcon from "@/assets/images/home2-hero-play-icon.png";

const Hero = () => {
  return (
    <>
      <section className="relative -z-10 mt-[-103px]">
        <img src={background} alt="" className="-z-10 max-h-[918px] min-h-[900px] w-full object-cover" />
        <div className="container absolute left-1/2 top-[160px] flex -translate-x-1/2 flex-col-reverse items-center gap-8 text-white lg:top-[307px] lg:flex-row lg:gap-0">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="min-h-[133px] text-4xl max-w-[502px] lg:text-[48px] font-semibold leading-[60px]">Your beauty center place</h2>
            <p className="min-h-[78px] max-w-[501px] font-medium leading-6 tracking-widest text-[#D8DCFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae
              lobortis.
            </p>
            <button className="mt-[34px] h-[52px] w-[179px] cursor-pointer rounded-[15px] border border-white text-base font-semibold leading-6 tracking-widest">
              More Details
            </button>
          </div>
          <div className="ml-0 flex -translate-y-px items-center gap-[27px] lg:ml-[199px]">
            <img src={playIcon} alt="" className="" />
            <div className="hidden translate-y-[1px] text-base font-semibold leading-6 tracking-widest lg:inline">Tour Video</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
