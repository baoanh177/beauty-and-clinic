import background from "@/assets/images/hero-bg.svg";
import img from "@/assets/images/hero-img.png";
import { Background, Button, Container, Content, Desc, ImageWrapper, Inner, Pagination, PaginationItem, Title } from "./style";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <Background src={background} />
      <Container>
        <Inner>
          <Content>
            <Title>Clinic &amp; beauty consultant</Title>
            <Desc>It is a long established fact that a reader will be by the readable content of a page.</Desc>
            <Button>More Details</Button>
          </Content>
          <ImageWrapper>
            <img src={img} alt="" />
          </ImageWrapper>
        </Inner>
        <Pagination>
          <PaginationItem />
          <PaginationItem isActive />
          <PaginationItem />
        </Pagination>
      </Container>
    </>
  );
};

export default Hero;
