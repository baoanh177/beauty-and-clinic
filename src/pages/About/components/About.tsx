import image from "@/assets/images/about-page-img.png";
import playBtn from "@/assets/images/about-play-icon.png";
import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import clsx from "clsx";

const About = () => {
  return (
    <>
      <div className="container !mt-[125.5px]">
        <div
          className="flex flex-col"
          data-aos="fade-right"
          data-aos-duration={1000}
          data-aos-once="true"
          data-aos-anchor-placement="center-center"
        >
          <HeadingSubtitle>About</HeadingSubtitle>
          <HeadingTitle className="mt-3 min-h-[97px] max-w-[732px]">We are a leading beauty clinic that has been around since 2002</HeadingTitle>
          <HeadingDesc className="mt-3 min-h-[56px] max-w-[680px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
          </HeadingDesc>
        </div>
        <figure
          className="relative mt-[57.5px] overflow-hidden rounded-[50px] shadow-[0px_25px_50px_25px_#F6F7FF]"
          data-aos="fade-left"
          data-aos-duration={1000}
          data-aos-once="true"
          data-aos-anchor-placement="center-center"
        >
          <img src={image} alt="" />
          <img
            src={playBtn}
            alt=""
            className={clsx(
              "absolute left-1/2 top-1/2 h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 cursor-pointer",
              "sm:h-[120px] sm:w-[120px] sm:-translate-y-[83px]",
              "md:h-auto md:w-auto md:-translate-y-[83px]",
            )}
          />
        </figure>
      </div>
    </>
  );
};

export default About;
