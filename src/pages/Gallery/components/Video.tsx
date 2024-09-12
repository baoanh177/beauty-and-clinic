import background from "@/assets/images/gallery-page-video-bg.png";
import HeadingDesc from "@/components/HeadingDesc";
import HeadingTitle from "@/components/HeadingTitle";
import icon from "@/assets/images/play-btn-inside-icon.png";
import { Background, ContentWrapper, IconWrapper, PlayIcon, Section } from "./styles/video.style";

const Video = () => {
  return (
    <>
      <Section>
        <Background src={background} />
        <ContentWrapper>
          <HeadingTitle children="Watch the video tour" className="min-h-[51px] text-white" />
          <HeadingDesc
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            className="mt-[13px] min-h-[56px] text-[#CACACA] lg:max-w-[555px]"
          />
          <IconWrapper>
            <PlayIcon src={icon}/>
          </IconWrapper>
        </ContentWrapper>
      </Section>
    </>
  );
};

export default Video;
