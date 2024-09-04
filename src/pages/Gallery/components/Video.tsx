import background from "@/assets/images/gallery-page-video-bg.png";
import HeadingDesc from "@/components/HeadingDesc";
import HeadingTitle from "@/components/HeadingTitle";
import icon from "@/assets/images/play-btn-inside-icon.png";

const Video = () => {
  return (
    <>
      <section className="relative mt-[126.2px]">
        <img src={background} alt="" className="h-full w-full object-cover min-h-[600px]" />
        <article className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
          <HeadingTitle children="Watch the video tour" className="min-h-[51px] text-white" />
          <HeadingDesc
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            className="mt-[13px] min-h-[56px] lg:max-w-[555px] text-[#CACACA]"
          />
          <div className="mt-[41px] flex h-[127px] w-[127px] items-center justify-center rounded-circle border-2 border-white shadow-[0px_0px_12px_7px_#FFFFFF26]">
            <img src={icon} alt="" className="translate-x-[3.5px]" />
          </div>
        </article>
      </section>
    </>
  );
};

export default Video;
