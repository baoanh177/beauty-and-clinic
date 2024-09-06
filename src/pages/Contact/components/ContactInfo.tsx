import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import mapIcon from "@/assets/images/map-icon.png";
import phoneIcon from "@/assets/images/contact-page-phone-icon.png";
import mailIcon from "@/assets/images/mail-icon.png";

const ContactInfo = () => {
  return (
    <>
      <section className="mt-[115px] pb-[55px]">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <HeadingSubtitle children="Get in Touch" />
            <HeadingTitle children="Get direct handling by us" className="mt-3 min-h-[57px]" />
            <HeadingDesc children="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam." className="mt-3" />
          </div>
          <div className="mt-[94px] flex justify-center gap-[36.5px] flex-wrap">
            <div className="flex h-[402px] w-full sm:w-[424px] xl:w-[270px] flex-col items-center rounded-[42px] pt-[79.5px] text-center transition-all hover:w-full sm:hover:w-[424px] duration-700 hover:shadow-[0px_25px_50px_25px_#F6F7FF]">
              <div className="h-[65px] w-[65px] shrink-0">
                <img src={mapIcon} alt="" className="h-full w-full object-cover" />
              </div>
              <HeadingSubtitle className="mt-[47px]">Address</HeadingSubtitle>
              <h4 className="mt-[15px] text-2xl font-semibold leading-[30px]">101 Baker Street, NY</h4>
              <p
                children="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
                className="mt-[13px] max-w-[270px] text-sm leading-[21px] tracking-widest text-[#8B8B8B]"
              />
            </div>
            <div className="flex h-[402px] w-full sm:w-[424px] xl:w-[270px] flex-col items-center rounded-[42px] pt-[79.5px] text-center transition-all hover:w-full sm:hover:w-[424px] duration-700 hover:shadow-[0px_25px_50px_25px_#F6F7FF]">
              <div className="h-[65px] w-[65px] shrink-0">
                <img src={phoneIcon} alt="" className="h-full w-full object-cover" />
              </div>
              <HeadingSubtitle className="mt-[47px]">Phone</HeadingSubtitle>
              <h4 className="mt-[15px] text-2xl font-semibold leading-[30px]">+896 120 5889</h4>
              <p
                children="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
                className="mt-[13px] max-w-[270px] text-sm leading-[21px] tracking-widest text-[#8B8B8B]"
              />
            </div>
            <div className="flex h-[402px] w-full sm:w-[424px] xl:w-[270px] flex-col items-center rounded-[42px] pt-[79.5px] text-center transition-all hover:w-full sm:hover:w-[424px] duration-700 hover:shadow-[0px_25px_50px_25px_#F6F7FF]">
              <div className="h-[65px] w-[65px] shrink-0">
                <img src={mailIcon} alt="" className="h-full w-full object-cover" />
              </div>
              <HeadingSubtitle className="mt-[47px]">Mail</HeadingSubtitle>
              <h4 className="mt-[15px] text-2xl font-semibold leading-[30px]">mail@company.com</h4>
              <p
                children="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
                className="mt-[13px] max-w-[270px] text-sm leading-[21px] tracking-widest text-[#8B8B8B]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
