import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import HeadingDesc from "@/components/HeadingDesc";
import serviceImg1 from "@/assets/images/home2-service-img-1.png";
import serviceImg2 from "@/assets/images/home2-service-img-2.png";
import serviceImg3 from "@/assets/images/home2-service-img-3.png";
import background from "@/assets/images/home2-service-bg.png";
import SmallServiceCard from "@/components/SmallServiceCard";

const Service = () => {
  return (
    <>
      <section className="relative mt-[70px] lg:mt-[158.8px]">
        <img src={background} alt="" className="absolute bottom-0 left-0 -z-10 translate-y-1/2 pt-5" />
        <div className="container flex flex-col" data-aos="fade-up" data-aos-duration={1000} data-aos-once="true">
          <div className="flex flex-col justify-center gap-[12px] text-center">
            <HeadingSubtitle className="translate-x-[.5px]">Main Services</HeadingSubtitle>
            <HeadingTitle className="min-h-[53px]">Our focus services</HeadingTitle>
            <HeadingDesc className="translate-y-[-.9px] translate-x-[.8px]">Lorem ipsum dolor sit amet.</HeadingDesc>
          </div>
          <div
            className="mt-[50px] flex flex-wrap justify-center gap-[30px] lg:mt-[76px] lg:gap-[66px]"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-once="true"
          >
            <SmallServiceCard thumb={serviceImg1} desc="Lorem ipsum dolor sit amet, consectetur adipiscing." title="Beauty consultation" />
            <SmallServiceCard thumb={serviceImg2} desc="Lorem ipsum dolor sit amet, consectetur adipiscing." title="Skin treatments" />
            <SmallServiceCard thumb={serviceImg3} desc="Lorem ipsum dolor sit amet, consectetur adipiscing." title="Beauty product" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
