import playIcon from "@/assets/images/play-btn-icon.png";
import image from "@/assets/images/about-img.png";
import background from "@/assets/images/about-bg.png";
import { Actions, Background, Container, Content, Desc, DesktopImageWrapper, Image, LearnMoreBtn, MobileImageWrapper, Paragraph, Section, Subtitle, Title, WatchBtnText, WatchBtnWrapper } from "./style";
// @ts-ignore
import tw from "twin.macro";

const About = () => {
  return (
    <>
      {/* About */}
      <Section>
        <Background src={background} alt="" />
        <Container>
          <Content>
            <Subtitle children="About Us"/>
            <Title children="We are the best beauty clinic" />
            <Desc>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
              </Paragraph>
              <Paragraph>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</Paragraph>
            </Desc>
            <MobileImageWrapper>
              <Image src={image} alt="" />
            </MobileImageWrapper>
            <Actions>
              <LearnMoreBtn children="Learn More" />
              <WatchBtnWrapper>
                <Image src={playIcon} alt="" />
                <WatchBtnText children="Watch Video" />
              </WatchBtnWrapper>
            </Actions>
          </Content>
          <DesktopImageWrapper>
            <Image src={image} tw="object-cover w-full h-full max-[1024px]:hidden" alt="" />
          </DesktopImageWrapper>
        </Container>
      </Section>
    </>
  );
};

export default About;
