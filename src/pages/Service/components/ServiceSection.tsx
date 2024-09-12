import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import image1 from "@/assets/images/service-page-service-img-1.png";
import image2 from "@/assets/images/service-page-service-img-2.png";
import image3 from "@/assets/images/service-page-service-img-3.png";
import image4 from "@/assets/images/service-page-service-img-4.png";
import background from "@/assets/images/service-page-service-bg.png";
import clsx from "clsx";
import Container from "@/components/Container";

const ServiceSection = () => {
  return (
    <>
      <section className="relative mt-[60px] md:mt-[125.5px]">
        <img src={background} alt="" className="absolute -z-10 top-[-30px] left-0 right-0 object-cover" />
        <Container className="xl:!max-w-[1100px]">
          <div className="flex flex-col items-center gap-3 text-center">
            <HeadingSubtitle children="Our Services" />
            <HeadingTitle children="We focus on your beauty" className="min-h-[57px]" />
            <HeadingDesc children="Lorem ipsum dolor sit amet" className="min-h-[28px] translate-x-[.6px]" />
          </div>
          <div className={clsx("mt-[69.5px] flex flex-col justify-center gap-[20px]", "xl:gap-[68px]")}>
            <div className={clsx("flex flex-col justify-between gap-[20px]", "sm:flex-row sm:min-h-[180px] min-[1080px]:min-h-[254px] xl:gap-[84px]")}>
              <figure className={clsx("w-full shrink-0 overflow-hidden rounded-[25px]", "sm:w-[26.45%]")}>
                <img src={image1} alt="" className="h-full w-full object-cover" />
              </figure>
              <figure className="w-[65.9%%] overflow-hidden rounded-[25px]">
                <img src={image2} alt="" className="h-full w-full object-cover" />
              </figure>
            </div>
            <div className={clsx("flex flex-col-reverse justify-between gap-[20px]", "sm:flex-row sm:min-h-[180px] min-[1080px]:min-h-[255px] xl:gap-[84px]")}>
              <figure className="w-[65.9%%] overflow-hidden rounded-[25px]">
                <img src={image3} alt="" className="h-full w-full object-cover" />
              </figure>
              <figure className={clsx("w-full shrink-0 overflow-hidden rounded-[25px]", "sm:w-[26.45%]")}>
                <img src={image4} alt="" className="h-full w-full object-cover" />
              </figure>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServiceSection;
