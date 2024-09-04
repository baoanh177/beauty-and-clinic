import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import MemberList from "@/components/MemberList";
import background from "@/assets/images/team-page-team-bg.png"

const TeamSection = () => {
  return (
    <>
      <section className="relative pt-[125.5px]">
        <img src={background} alt="" className="absolute top-[125px] right-0 -z-10" />
        <div className="container">
          <div className="flex flex-col items-center translate-x-[-40px]">
            <HeadingSubtitle children="Our Team" />
            <HeadingTitle children="We are Professional" className="mt-3 min-h-[57px]"/>
            <HeadingDesc children="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam." className="mt-3 min-h-[28px]"/>
          </div>
          <MemberList className="mt-[6px]"/>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
