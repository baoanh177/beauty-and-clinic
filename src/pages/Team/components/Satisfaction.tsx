import background from "@/assets/images/team-page-satisfaction-bg.png";
import HeadingDesc from "@/components/HeadingDesc";
import HeadingTitle from "@/components/HeadingTitle";
const Satisfaction = () => {
  return (
    <>
      <section className="relative mt-[125px]">
        <img src={background} alt="" className="h-full min-h-[529px] w-full object-cover" />
        <article className="absolute inset-0 -mt-[7px] flex h-full max-w-full flex-col items-center justify-center text-center p-5">
          <HeadingTitle children="Customer satisfaction is our main goal" className="min-h-[97px] w-full max-w-[500px] pl-[24px] text-white" />
          <HeadingDesc
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            className="min-h-[56px] w-full text-[#CACACA] lg:max-w-[680px]"
          />
        </article>
      </section>
    </>
  );
};

export default Satisfaction;
