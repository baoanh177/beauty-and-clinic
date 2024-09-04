import background from "@/assets/images/service-page-responsibility-bg.png";
import HeadingDesc from "@/components/HeadingDesc";
import HeadingTitle from "@/components/HeadingTitle";
import playIcon from "@/assets/images/home2-hero-play-icon.png";
import clsx from "clsx";

const Responsibility = () => {
  return (
    <>
      <section className="relative mt-[130px]">
        <img src={background} alt="" className="min-h-[600px] lg:min-h-[529px] w-full object-cover" />
        <article
          className={clsx(
            "container absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col-reverse items-center",
            "lg:flex-row lg:items-start",
          )}
        >
          <div className="flex flex-col gap-3 text-center lg:text-left">
            <HeadingTitle children="Best responsibility and service for our customers" className="min-h-[97px] max-w-[600px] text-white" />
            <HeadingDesc
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
              className="min-h-[56px] max-w-[555px] text-[#CACACA]"
            />
          </div>
          <div className="ml-0 mt-px flex -translate-y-px items-center gap-[9.5px] lg:ml-[125px]">
            <img src={playIcon} alt="" className="" />
            <div className="hidden translate-y-[-1px] text-nowrap font-semibold leading-6 tracking-widest text-white xl:inline">
              Treatments Videos
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Responsibility;
