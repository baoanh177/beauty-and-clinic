import background from "@/assets/images/home2-stats-bg.png";
import HeadingTitle from "@/components/HeadingTitle";
import HeadingDesc from "@/components/Logo/HeadingDesc";
import StatsCard from "@/components/StatsCard";
import statsIcon1 from "@/assets/images/home2-stats-icon1.png"
import statsIcon2 from "@/assets/images/home2-stats-icon2.png"
import statsIcon3 from "@/assets/images/home2-stats-icon3.png"
import statsIcon4 from "@/assets/images/home2-stats-icon4.png"

const Stats = () => {
  return (
    <>
      <section className="relative mt-[128px]">
        <img src={background} alt="" />
        <div className="container absolute left-1/2 top-[290px] flex items-center -translate-x-1/2 gap-[139px]">
          <div className="ml-1 flex flex-col shrink-0">
            <HeadingTitle className="mt-px min-h-[53px] text-white">Why choosing us?</HeadingTitle>
            <HeadingDesc className="mt-3 max-w-[486px] text-[#D8DCFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
            </HeadingDesc>
          </div>
          <div className="flex items-center flex-wrap gap-x-[72px] gap-y-[43px]">
            <StatsCard icon={statsIcon1} title="100%" desc="trusted clinic"/>
            <StatsCard icon={statsIcon2} title="99%" desc="customer love"/>
            <StatsCard icon={statsIcon3} title="75+" desc="asian branch"/>
            <StatsCard icon={statsIcon4} title="1.200+" desc="licensed worker"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
