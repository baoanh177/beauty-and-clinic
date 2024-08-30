import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import background from "@/assets/images/about-page-team-bg.png";
import MemberList from "@/components/MemberList";

const Team = () => {
  return (
    <>
      <section className="relative !mt-[137px]">
        <img src={background} alt="" className="absolute right-0 top-[-524px] -z-10" />
        <div className="container">
          <div className="flex flex-col items-center gap-3 text-center">
            <HeadingSubtitle>Professional Teams</HeadingSubtitle>
            <HeadingTitle className="min-h-[52px]">The Professional expert</HeadingTitle>
            <HeadingDesc className="min-h-[51px] translate-x-[.5px] translate-y-[.8px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
            </HeadingDesc>
          </div>
          <MemberList
            className="mt-[87px]"
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-once="true"
            data-aos-anchor-placement="center-center"
          />
        </div>
      </section>
    </>
  );
};

export default Team;
