import Button from "@/components/Button/Button";
import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import background from "@/assets/images/gallery-page-quota-bg.png";

const Quota = () => {
  return (
    <>
      <section className="relative pt-[120px] pb-[31px]">
        <img src={background} className="absolute right-0 top-0 -z-10" alt="" />
        <div className="container flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[125px]">
          <article className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <HeadingSubtitle children="Get The Quota" className="translate-x-px translate-y-[.5px]" />
            <HeadingTitle children="Want to be handled by our professional team immediately?" className="mt-3 min-h-[94px] max-w-[642px]" />
            <HeadingDesc
              children="Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim."
              className="mt-[18px] max-w-[620px]"
            />
          </article>
          <Button className="h-[58px] min-w-[316px] translate-y-[1.2px] pb-[16px] pl-[41px] pr-[39px] pt-[15px] shadow-[0px_17px_22px_0px_#FFEDF6]">
            Make an Appointment
          </Button>
        </div>
      </section>
    </>
  );
};

export default Quota;
