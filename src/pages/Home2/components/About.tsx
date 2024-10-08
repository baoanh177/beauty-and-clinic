import image from "@/assets/images/home2-about-img.png";
import Button from "@/components/Button/Button";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import HeadingDesc from "@/components/HeadingDesc";
import Container from "@/components/Container";

const About = () => {
  return (
    <>
      <section className="pt-[70px] lg:pt-[159px]">
        <Container className="flex flex-col items-center gap-[100px] lg:flex-row lg:items-start lg:gap-[168px]">
          <figure data-aos="fade-right" className="mt-[-1px]" data-aos-duration={1000} data-aos-once="true">
            <img src={image} alt="" />
          </figure>
          <div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-once="true"
          >
            <HeadingSubtitle className="translate-x-[.5px]">About Us</HeadingSubtitle>
            <HeadingTitle className="ml-[-.5px] mt-[11.4px] min-h-[91px] max-w-[460px]">We are the best beauty clinic</HeadingTitle>
            <HeadingDesc className="mt-[9.8px] min-h-[133px] max-w-[483px] translate-x-[-.4px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
              Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
            </HeadingDesc>
            <Button className="ml-[0.5px] mt-[34.5px] h-[58.36px] w-[200px] pl-[43px] pt-[16.5px] font-semibold leading-6 tracking-widest">
              Learn More
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
