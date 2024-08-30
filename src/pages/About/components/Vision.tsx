import image from "@/assets/images/home2-about-img.png";
import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import clsx from "clsx";

const Vision = () => {
  return (
    <>
      <section className="mt-[112px]">
        <div
          className={clsx(
            "container flex flex-col-reverse items-center text-center",
            "min-[900px]::gap-[50px] min-[900px]:flex-row min-[900px]:text-left",
            "lg:gap-[187px]",
          )}
        >
          <figure
            className="w-full shrink-0 pb-[40.61px] pl-[55.5px] pr-[46.19px] pt-[38px] md:w-[475px]"
            data-aos="fade-right"
            data-aos-duration={1000}
            data-aos-once="true"
            data-aos-anchor-placement="center-center"
          >
            <img src={image} alt="" className="w-full md:h-[235.06px] md:w-[373.51px]" />
          </figure>
          <article
            className="max-w-[500px]"
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-once="true"
            data-aos-anchor-placement="center-center"
          >
            <HeadingSubtitle className="translate-x-px">Our Vision</HeadingSubtitle>
            <HeadingTitle className="mt-[11px] min-h-[79px] translate-y-[.6px]">Be the best and go international</HeadingTitle>
            <HeadingDesc className="mt-3 flex min-h-[157px] translate-y-[2px] flex-col gap-6">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero.
              </span>
              <span>Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</span>
            </HeadingDesc>
          </article>
        </div>
      </section>
    </>
  );
};

export default Vision;
