import HeadingSubtitle from "@/components/HeadingSubtitle";
import image from "@/assets/images/service-page-treatment-img.png";
import HeadingTitle from "@/components/HeadingTitle";
import HeadingDesc from "@/components/HeadingDesc";
import icon from "@/assets/images/home2-learn-more-icon.png";
import clsx from "clsx";
import Container from "@/components/Container";

const Treatment = () => {
  return (
    <>
      <section className="mt-[92px]">
        <Container
          className={clsx(
            "flex flex-col items-center gap-[20px]",
            "md:flex-row md:items-start md:gap-[40px] lg:gap-[100px] xl:gap-[190px]",
          )}
        >
          <article className="text-center md:text-left mt-[29.9px] min-w-[40%] lg:min-w-0">
            <HeadingSubtitle children="Skin Treatements" className="translate-x-px translate-y-[.2px]" />
            <HeadingTitle children="Skin care and treatment by expert" className="mt-3 md:min-h-[103px] md:max-w-[411px]" />
            <HeadingDesc
              className="min-h-[87px] md:max-w-[475px] mt-3 md:mt-0"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
            />
            <div className="ml-px mt-[9px] flex justify-center gap-[12px] md:justify-start">
              <span className="font-semibold leading-6 tracking-widest">Make an Appointment</span>
              <div className="flex h-[25px] w-[25px] items-center justify-center">
                <img src={icon} alt="" className="h-[15.63px] w-[19.46px]" />
              </div>
            </div>
          </article>
          <img src={image} alt="" />
        </Container>
      </section>
    </>
  );
};

export default Treatment;
