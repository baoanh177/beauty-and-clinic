import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import HeadingDesc from "@/components/Logo/HeadingDesc";
import serviceImg1 from "@/assets/images/home2-service-img-1.png";
import serviceImg2 from "@/assets/images/home2-service-img-2.png";
import serviceImg3 from "@/assets/images/home2-service-img-3.png";
import background from "@/assets/images/home2-service-bg.png";
import SmallServiceCard from "@/components/SmallServiceCard";

const Service = () => {
  return (
    <>
      <section className="relative mt-[70px] lg:mt-[158px]">
        <img src={background} alt="" className="absolute left-0 bottom-0 translate-y-1/2 pt-5"/>
        <div className="container flex flex-col">
          <div className="flex flex-col justify-center gap-[12px] text-center">
            <HeadingSubtitle>Main Services</HeadingSubtitle>
            <HeadingTitle className="min-h-[53px]">Our focus services</HeadingTitle>
            <HeadingDesc>Lorem ipsum dolor sit amet.</HeadingDesc>
          </div>
          <div className="mt-[50px] lg:mt-[76px] flex flex-wrap justify-center gap-[30px] lg:gap-[66px]">
            <SmallServiceCard thumb={serviceImg1} desc="Lorem ipsum dolor sit amet, consectetur adipiscing." title="Beauty consultation" />
            <SmallServiceCard thumb={serviceImg2} desc="Lorem ipsum dolor sit amet, consectetur adipiscing." title="Skin treatments" isActive/>
            <SmallServiceCard thumb={serviceImg3} desc="Lorem ipsum dolor sit amet, consectetur adipiscing." title="Beauty product" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
