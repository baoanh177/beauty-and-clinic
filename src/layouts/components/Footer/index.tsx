import background from "@/assets/images/footer-bg.png";
import Logo from "@/components/Logo/Logo";
import fb from "@/assets/images/footer-fb-icon.png";
import twiiter from "@/assets/images/footer-twiiter-icon.png";
import ytb from "@/assets/images/footer-ytb-icon.png";
import ig from "@/assets/images/footer-ig-icon.png";
import linkin from "@/assets/images/footer-in.png";
import Container from "@/components/Container";
import {
  Address,
  Background,
  BottomBackground,
  Col,
  ColTitle,
  Copyright,
  Email,
  FirstLine,
  Information,
  InformationContent,
  Item,
  ItemLink,
  ItemLinkIcon,
  PageList,
  Pages,
  Phone,
  Row,
  SocialImage,
  SocialItem,
  Socials,
  Strong,
  styles,
  Footer as StyledFooter,
} from "./style";
// @ts-ignore
import tw from "twin.macro";

const Footer = ({ className }: { className?: string }) => {
  const socials = [fb, twiiter, linkin, ytb, ig];
  const cols = [
    ["Home", "About", "Services", "Gallery", "Team"],
    ["Terms & conditions", "Privacy policy", "Blog", "Contact"],
  ];
  return (
    <>
      {/* Footer */}
      <StyledFooter {...{ className }}>
        <Background src={background} />
        <Container css={styles.content}>
          <Information>
            <Logo type="light" />
            <InformationContent>
              <FirstLine>
                <Strong>Beautice</Strong> is a Beauty Clinic WordPress Theme.
              </FirstLine>
              <Address>Baker Steet 101, NY, United States.</Address>
              <Row>
                <Phone>+521 569 8966.</Phone>
                <Email href="mailto:mail@company.com">mail@company.com.</Email>
              </Row>
            </InformationContent>
          </Information>
          <Pages>
            <Col>
              <ColTitle>Pages</ColTitle>
              <PageList>
                {cols[0].map((item, index) => (
                  <Item key={index}>
                    <ItemLink>
                      <ItemLinkIcon className="fa-solid fa-caret-right" />
                      <span>{item}</span>
                    </ItemLink>
                  </Item>
                ))}
              </PageList>
            </Col>
            <Col>
              <ColTitle>Informations</ColTitle>
              <PageList>
                {cols[1].map((item, index) => (
                  <Item key={index}>
                    <ItemLink>
                      <ItemLinkIcon className="fa-solid fa-caret-right" />
                      <span>{item}</span>
                    </ItemLink>
                  </Item>
                ))}
              </PageList>
            </Col>
          </Pages>
        </Container>
        <Container css={styles.row}>
          <Socials>
            {socials.map((icon) => (
              <SocialItem>
                <SocialImage src={icon} alt="" />
              </SocialItem>
            ))}
          </Socials>
          <Copyright children="© AltDesain Studio 2021 - All right reserved." />
        </Container>
        <BottomBackground />
      </StyledFooter>
    </>
  );
};

export default Footer;
