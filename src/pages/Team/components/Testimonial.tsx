import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import TestimonialItem from "@/components/TestimonialItem";
import background from "@/assets/images/team-page-testimonial-bg.png";
import image1 from "@/assets/images/team-page-customer-img-1.png";
import arrowLeft from "@/assets/images/arrow-left.png";
import arrowRight from "@/assets/images/arrow-right.png";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/services/reducers";
import { AppDispatch } from "@/services/store";
import { next, prev, reset, setSlideWidth } from "@/services/store/slide/slide.slice";
import clsx from "clsx";
import avatar1 from "@/assets/images/client1.png";
import avatar2 from "@/assets/images/client2.png";
import avatar3 from "@/assets/images/client3.png";
import avatar4 from "@/assets/images/client4.png";
import avatar5 from "@/assets/images/client5.png";

const avatars = [image1, avatar1, avatar2, avatar3, avatar4, avatar5];

const Testimonial = () => {
  const prevBtnMobileRef = useRef<HTMLImageElement>(null);
  const nextBtnMobileRef = useRef<HTMLImageElement>(null);
  const prevBtnRef = useRef<HTMLImageElement>(null);
  const nextBtnRef = useRef<HTMLImageElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { currentPage, slideWidth, slideGap, slideNumber, currentPosition } = useSelector((state: RootStateType) => state.slide);

  useEffect(() => {
    const [nextBtn, prevBtn, list, prevBtnMobile, nextBtnMobile] = [
      nextBtnRef.current,
      prevBtnRef.current,
      listRef.current,
      prevBtnMobileRef.current,
      nextBtnMobileRef.current,
    ];

    const handleNext = () => {
      if (currentPage === slideNumber) return;
      dispatch(next());
    };
    const handlePrev = () => {
      if (currentPage === 1) return;
      dispatch(prev());
    };

    if (nextBtn && prevBtn && list && prevBtnMobile && nextBtnMobile) {
      nextBtn.onclick = handleNext;
      prevBtn.onclick = handlePrev;
      nextBtnMobile.onclick = handleNext;
      prevBtnMobile.onclick = handlePrev;
    }
  }, [currentPage, slideWidth, prevBtnRef, prevBtnRef, listRef]);

  useEffect(() => {
    let timerId: any;
    if (currentPage - 1 !== slideNumber) {
      timerId = setTimeout(() => {
        dispatch(next());
      }, 6000);
    } else {
      dispatch(reset());
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [currentPage]);

  document.body.onresize = () => {
    if (document.body.clientWidth < 600) {
      dispatch(setSlideWidth(document.body.clientWidth - 40));
      dispatch(reset());
    } else if (slideWidth !== 550) {
      dispatch(setSlideWidth(550));
      dispatch(reset());
    }
  };

  return (
    <>
      <section className="relative pb-[16px] pt-[118px]">
        <img src={background} alt="" className="absolute left-0 right-0 top-[2px] w-full object-cover -z-10" />
        <div className="container translate-x-[.5px]">
          <div className="flex translate-y-[.5px] flex-col items-center gap-3 text-center">
            <HeadingSubtitle children="Our Testimonials" className="" />
            <HeadingTitle children="What our customer says" className="min-h-[57px]" />
            <HeadingDesc children="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam." />
          </div>
          <div className="relative mt-[65px] flex items-center justify-center">
            <div className="absolute top-[132px] hidden h-[27px] w-[778px] justify-between min-[900px]:flex">
              <img
                ref={prevBtnRef}
                src={arrowLeft}
                alt=""
                className={clsx("-translate-y-px cursor-pointer", currentPage === 1 && "pointer-events-none opacity-30")}
              />
              <img
                ref={nextBtnRef}
                src={arrowRight}
                alt=""
                className={clsx("translate-y-px cursor-pointer", currentPage === slideNumber && "pointer-events-none opacity-30")}
              />
            </div>
            <div className="relative h-[400px] w-[550px] overflow-hidden min-[400px]:h-[320px] min-[570px]:h-[281px]">
              <div
                ref={listRef}
                className="absolute bottom-0 top-0 flex touch-pan-x snap-x snap-mandatory overflow-x-hidden transition-[left] duration-1000"
                style={{ gap: `${slideGap}px`, left: `${currentPosition}px` }}
              >
                {avatars.map((url, index) => {
                  return (
                    <TestimonialItem
                      key={index}
                      image={url}
                      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit."
                      star={5}
                      className="snap-center"
                      width={`${slideWidth}px`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-5 max-[900px]:mt-4 min-[900px]:hidden">
            <i className="fa-solid fa-angles-left text-2xl text-gray-500" ref={prevBtnMobileRef}></i>
            <i className="fa-solid fa-angles-right text-2xl text-gray-500" ref={nextBtnMobileRef}></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
