import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import image from "@/assets/images/mission-img.png";
import background from "@/assets/images/mission-bg.png";
import clsx from "clsx";

const Mission = () => {
  return (
    <>
      <section className={clsx("relative mt-[118px]")}>
        <img src={background} alt="" className="absolute left-0 top-[-358px] -z-10" />
        <div
          className={clsx(
            "container flex flex-col text-center items-center",
            "min-[900px]:items-start min-[900px]::gap-[50px] min-[900px]:flex-row min-[900px]:text-left",
            "lg:gap-[137px]",
          )}
        >
          <article data-aos="fade-right" data-aos-duration={1000} data-aos-once="true" data-aos-anchor-placement="center-center">
            <HeadingSubtitle className="translate-x-px">Our Mission</HeadingSubtitle>
            <HeadingTitle className="mt-3 min-h-[94px] max-w-[525px]">Special & premium service to any clients</HeadingTitle>
            <HeadingDesc className="mt-[9px] flex max-w-[483px] flex-col gap-6">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero.
              </span>
              <span>Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</span>
            </HeadingDesc>
          </article>
          <figure
            className="w-full mt-[-12px] md:h-[314px] md:w-[475px]"
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-once="true"
            data-aos-anchor-placement="center-center"
          >
            <img src={image} alt="" />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Mission;
