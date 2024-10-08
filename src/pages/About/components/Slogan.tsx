import background from "@/assets/images/slogan-bg.png";
import Container from "@/components/Container";
import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import clsx from "clsx";

const Slogan = () => {
  return (
    <>
      <section className={clsx("relative mt-[151px] flex h-[528.7px] items-center justify-center pt-[0]", "md:block md:pt-[164.5px]")}>
        <img src={background} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <Container>
          <article
            className="flex flex-col items-center gap-3 text-center"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-once="true"
            data-aos-anchor-placement="center-center"
          >
            <HeadingSubtitle className="translate-x-[.4px] text-[#ABB4FF]">Business Slogan</HeadingSubtitle>
            <HeadingTitle className="min-h-[97px] max-w-[600px] text-[#FFFFFF]">Best responsibility and service for our customers</HeadingTitle>
            <HeadingDesc className="h-[56px] max-w-[680px] translate-x-[1px] indent-[-1.6px] text-[#CACACA]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
            </HeadingDesc>
          </article>
        </Container>
      </section>
    </>
  );
};

export default Slogan;
