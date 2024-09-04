import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import image1 from "@/assets/images/gallery-page-gallery-img-1.png";
import image2 from "@/assets/images/gallery-page-gallery-img-2.png";
import image3 from "@/assets/images/gallery-page-gallery-img-3.png";
import image4 from "@/assets/images/gallery-page-gallery-img-4.png";
import image5 from "@/assets/images/gallery-page-gallery-img-5.png";
import image6 from "@/assets/images/gallery-page-gallery-img-6.png";
import image7 from "@/assets/images/gallery-page-gallery-img-7.png";
import image8 from "@/assets/images/gallery-page-gallery-img-8.png";
import image9 from "@/assets/images/gallery-page-gallery-img-9.png";
import clsx from "clsx";

const GallerySection = () => {
  return (
    <>
      <section className="pt-[125px]">
        <div className="container">
          <div className={clsx("flex flex-col items-center justify-between pr-5 text-center", "lg:flex-row lg:text-left")}>
            <div className="flex flex-col gap-3">
              <HeadingSubtitle children="Our Gallery" />
              <HeadingTitle children="Check out the collection pictures from our clinic" className="lg:min-h-[104px] lg:max-w-[615px]" />
            </div>
            <HeadingDesc
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
              className="mt-3 lg:mt-0 lg:max-w-[407px]"
            />
          </div>
          <div className={clsx("mt-[75px] grid grid-cols-1 gap-5", "sm:grid-cols-2 lg:grid-cols-3 lg:gap-[38px_36px]")}>
            <figure className="relative overflow-hidden rounded-[20px] bg-gray-50 pt-[58.98%]">
              <img src={image1} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="relative overflow-hidden rounded-[20px] bg-gray-50 pt-[58.98%]">
              <img src={image2} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="relative overflow-hidden rounded-[20px] bg-gray-50 pt-[58.98%]">
              <img src={image3} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="relative overflow-hidden rounded-[20px] bg-gray-50 pt-[58.98%]">
              <img src={image4} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="relative hidden overflow-hidden rounded-[20px] bg-gray-50 pt-[58.98%] sm:block">
              <img src={image5} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="relative hidden overflow-hidden rounded-[20px] bg-gray-50 pt-[58.98%] sm:block">
              <img src={image6} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="relative hidden overflow-hidden rounded-[20px] bg-gray-50 pt-[58.98%] lg:block">
              <img src={image7} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="relative hidden overflow-hidden rounded-[20px] bg-gray-50 pt-[58.98%] lg:block">
              <img src={image8} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
            <figure className="relative hidden overflow-hidden rounded-[20px] bg-gray-50 pt-[58.98%] lg:block">
              <img src={image9} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
          </div>
          <HeadingDesc
            children={
              <>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                  urna, porttitor rhoncus dolor purus non enim,
                </span>{" "}
                <span className="font-semibold text-black">our teams</span>.
              </>
            }
            className="mt-[66px] translate-y-[.5px] text-center lg:max-w-[660px] lg:text-left"
          />
        </div>
      </section>
    </>
  );
};

export default GallerySection;
