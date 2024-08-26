import background from "@/assets/images/home2-hero.png";
import playIcon from "@/assets/images/home2-hero-play-icon.png";

const Hero = () => {
  return (
    <>
      <section className="relative -z-10 mt-[-104px]">
        <img src={background} alt="" className="-z-10 min-h-[900px] object-cover max-w-[1440px] mx-auto" />
        <div className="container absolute left-1/2 top-[200px] flex -translate-x-1/2 flex-col-reverse items-center gap-10 text-white lg:top-[307px] lg:flex-row lg:gap-0">
          <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
            <h2 className="min-h-[133px] max-w-[502px] text-5xl font-semibold leading-[60px]">Your beauty center place</h2>
            <p className="min-h-[78px] max-w-[501px] text-base font-medium leading-6 tracking-widest">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae
              lobortis.
            </p>
            <button className="mt-[34px] h-[52px] w-[179px] cursor-pointer rounded-[15px] border border-white text-base font-semibold leading-6 tracking-widest">
              More Details
            </button>
          </div>
          <div className="ml-0 flex items-center gap-[46px] lg:ml-[218px]">
            <div className="flex h-[127px] w-[127px] items-center justify-center rounded-circle border-2 border-white shadow-[0px_0px_12px_7px_#FFFFFF26]">
              <img src={playIcon} alt="" className="pl-2" />
            </div>
            <span className="hidden text-base font-semibold leading-6 tracking-widest lg:inline">Tour Video</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
