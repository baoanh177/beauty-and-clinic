import background from "@/assets/images/contact-bg.png";
import image from "@/assets/images/contact-img.png";
import ContactForm from "@/components/ContactForm";
import { Background, Container, Content, Desc, Heading, Image, ImageWrapper, Section, Subtitle, Title } from "./style";

const Contact = () => {
  return (
    <>
      {/* Contact */}
      <Section>
        <Background src={background} alt="" />
        <Container>
          <ImageWrapper>
            <Image src={image} alt="" />
          </ImageWrapper>
          <Content>
            <Heading>
              <Subtitle children="Contact Us"/>
              <Title>Send your inquiry to our expert team</Title>
              <Desc>Lorem ipsum dolor sit amet nulla turapis tellus.</Desc>
            </Heading>
            <ContactForm />
          </Content>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
