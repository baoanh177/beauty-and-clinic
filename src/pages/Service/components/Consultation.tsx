import image from "@/assets/images/service-page-consultation-img.png";
import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import icon from "@/assets/images/home2-learn-more-icon.png";
import clsx from "clsx";

const Consultation = () => {
  return (
    <>
      <section className="mt-[100px] md:mt-[141px]">
        <div
          className={clsx(
            "container flex flex-col-reverse items-center gap-[20px]",
            "md:flex-row md:items-start md:gap-[40px] lg:gap-[100px] xl:gap-[187px] xl:max-w-[1137px]",
          )}
        >
          <figure className="w-full max-w-[475px] translate-x-[-1px]">
            <img src={image} alt="" />
          </figure>
          <article className="mt-[29.9px] flex flex-col text-center md:max-w-[475px] md:text-left">
            <HeadingSubtitle children="Beauty Consultation" />
            <HeadingTitle
              children="We services beauty consultation"
              className="mt-[11.6px] translate-x-[-1.2px] translate-y-[.4px] md:min-h-[103px] md:max-w-[411px]"
            />
            <HeadingDesc
              className="mt-4 min-h-[87px] translate-x-[-.8px] md:mt-0"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
            />
            <div className="mt-[9px] flex justify-center gap-[12px] md:justify-start">
              <span className="font-semibold leading-6 tracking-widest">Make an Appointment</span>
              <div className="flex h-[25px] w-[25px] items-center justify-center">
                <img src={icon} alt="" className="h-[15.63px] w-[19.46px]" />
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Consultation;
