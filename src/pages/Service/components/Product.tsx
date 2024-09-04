import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import clsx from "clsx";
import image from "@/assets/images/service-page-product-img.png";
import icon from "@/assets/images/home2-learn-more-icon.png";

const Product = () => {
  return (
    <>
      <section className="mt-[92px]">
        <div
          className={clsx(
            "container flex flex-col-reverse items-center gap-[20px]",
            "md:flex-row md:items-start md:gap-[40px] lg:gap-[100px] xl:gap-[187px]",
          )}
        >
          <img src={image} alt="" />
          <article className="mt-[29.9px] min-w-[40%] text-center md:text-left lg:min-w-0">
            <HeadingSubtitle children="Beauty Product" className="translate-x-px translate-y-[.2px]" />
            <HeadingTitle children="We present quality beauty products" className="mt-3 md:min-h-[103px] md:max-w-[411px]" />
            <HeadingDesc
              className="mt-3 min-h-[87px] md:mt-0 md:max-w-[475px]"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
            />
            <div className="ml-px mt-[8.5px] flex justify-center gap-[12px] md:justify-start">
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

export default Product;
