import phoneIcon from "@/assets/images/phone-icon.png";
import Button from "@/components/Button/Button";
import Container from "@/components/Container";
import HeadingTitle from "@/components/HeadingTitle";

const Subscribe = () => {
  return (
    <>
      <section className="mt-[171px]">
        <Container className="flex flex-col items-center gap-[90px] xl:flex-row">
          <div className="flex flex-col items-center text-center xl:items-start xl:text-left gap-3">
            <HeadingTitle className="ml-px h-[50px]">Request call services</HeadingTitle>
            <p className="w-[391px] leading-6 tracking-widest text-[#8B8B8B] translate-y-[-.9px] ml-[.9px]">
              Lorem ipsum dolor sit amet, consect adipiscing elit <b className="font-semibold text-[#091156]">Contact Us</b>.
            </p>
          </div>
          <div className="mt-3 flex w-full max-w-[658px] flex-col gap-2">
            <div className="flex h-[73px] overflow-hidden rounded-[25px]">
              <input
                type="text"
                placeholder="Insert your phone number here ..."
                className="grow rounded-[25px] pr-5 sm:rounded-e-[0] border border-[#D9DDFE] pb-[22px] pl-[37px] pt-[23px] placeholder:leading-6 placeholder:tracking-widest placeholder:text-[#C5C5C5] placeholder:translate-y-[-1px] placeholder:translate-x-[-.5px] sm:rounded-s-[25px]"
              />
              <div className="hidden h-full w-[113px] items-center justify-center bg-[#FF64AE] sm:flex cursor-pointer">
                <img src={phoneIcon} alt="" className="ml-[-6px] mt-px h-[38px] w-[38px]" />
              </div>
            </div>
            <div className="min-h-[17px] text-right text-xs italic leading-[18px] tracking-widest text-[#8B8B8B] translate-x-[1.5px]">
              Toll free for our coverage areas.
            </div>
          </div>
          <Button className="mt-[-60px] block w-full sm:hidden">Request</Button>
        </Container>
      </section>
    </>
  );
};

export default Subscribe;
