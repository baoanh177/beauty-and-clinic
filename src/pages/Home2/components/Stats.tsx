import background from "@/assets/images/home2-stats-bg.png";
import HeadingTitle from "@/components/HeadingTitle";
import HeadingDesc from "@/components/Logo/HeadingDesc";
import StatsCard from "@/components/StatsCard";
import statsIcon1 from "@/assets/images/home2-stats-icon1.png";
import statsIcon2 from "@/assets/images/home2-stats-icon2.png";
import statsIcon3 from "@/assets/images/home2-stats-icon3.png";
import statsIcon4 from "@/assets/images/home2-stats-icon4.png";

const Stats = () => {
  return (
    <>
      <section className="relative mt-[128px]">
        <img src={background} className="max-h-[800px] min-h-[800px] w-full object-cover sm:min-h-[600px] lg:min-h-fit" alt="" />
        <div className="container absolute left-1/2 top-[120px] flex -translate-x-1/2 flex-col items-center gap-5 lg:top-[160px] lg:flex-row lg:justify-between xl:top-[268px] xl:gap-[97px]">
          <div className="ml-1 flex shrink-0 flex-col" data-aos="fade-right" data-aos-duration={1000} data-aos-once="true">
            <HeadingTitle className="mt-px min-h-[53px] text-white">Why choosing us?</HeadingTitle>
            <HeadingDesc className="mt-3 max-w-[486px] text-[#D8DCFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
            </HeadingDesc>
          </div>
          <div
            className="flex h-[181px] flex-wrap items-center justify-center gap-[43px] gap-y-[43px] pt-[4px] lg:gap-x-[72px]"
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-once="true"
          >
            <StatsCard icon={statsIcon1} title="100%" desc="trusted clinic" isStrong />
            <StatsCard icon={statsIcon2} title="99%" desc="customer love" />
            <StatsCard icon={statsIcon3} title="75+" desc="asian branch" />
            <StatsCard icon={statsIcon4} title="1.200+" desc="licensed worker" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
