import Container from "@/components/Container";
import FAQItem from "@/components/FAQItem";
import HeadingTitle from "@/components/HeadingTitle";

const FAQ = () => {
  return (
    <>
      <section className="mt-[116px] pb-[43px]">
        <Container className="lg:max-w-[972px]">
          <div className="relative min-h-[66px] translate-y-[.5px] text-center">
            <HeadingTitle className="ml-[9px] translate-x-[.4px]">Services FAQ’s</HeadingTitle>
            <div className="absolute bottom-[0] left-1/2 h-[4.7px] w-[40px] -translate-x-1/2 rounded-full bg-[#FF64AE]"></div>
          </div>

          <div className="mt-[68.5px] flex flex-col">
            <FAQItem title="Is beauty consultation handled thoroughly?" defaultOpen>
              {({ ref }) => {
                return (
                  <p
                    ref={ref}
                    className="flex min-h-0 flex-col gap-[21px] text-sm font-normal italic leading-[21px] tracking-widest text-[#8B8B8B] md:min-h-[111px]"
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                      urna
                    </span>
                    <span>
                      porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                    </span>
                  </p>
                );
              }}
            </FAQItem>
            <FAQItem title="Can I be beautiful in an instant time?" className="mt-[28px]">
              {({ ref }) => {
                return (
                  <p
                    ref={ref}
                    className="flex min-h-0 flex-col gap-[21px] text-sm font-normal italic leading-[21px] tracking-widest text-[#8B8B8B] md:min-h-[111px]"
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                      urna
                    </span>
                    <span>
                      porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                    </span>
                  </p>
                );
              }}
            </FAQItem>
            <FAQItem title="Are there any side effects to the treatment methods or treatments at this clinic?" className="mt-[29.5px]">
              {({ ref }) => {
                return (
                  <p
                    ref={ref}
                    className="flex min-h-0 flex-col gap-[21px] text-sm font-normal italic leading-[21px] tracking-widest text-[#8B8B8B] md:min-h-[111px]"
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                      urna
                    </span>
                    <span>
                      porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                    </span>
                  </p>
                );
              }}
            </FAQItem>
            <FAQItem title="Do professionals have accreditation in their respective fields?" className="mt-[29.5px]">
              {({ ref }) => {
                return (
                  <p
                    ref={ref}
                    className="flex min-h-0 flex-col gap-[21px] text-sm font-normal italic leading-[21px] tracking-widest text-[#8B8B8B] md:min-h-[111px]"
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                      urna
                    </span>
                    <span>
                      porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                    </span>
                  </p>
                );
              }}
            </FAQItem>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FAQ;
