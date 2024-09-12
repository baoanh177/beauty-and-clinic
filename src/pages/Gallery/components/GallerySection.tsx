import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import image1 from "@/assets/images/gallery-page-gallery-img-1.png";
import image2 from "@/assets/images/gallery-page-gallery-img-2.png";
import image3 from "@/assets/images/gallery-page-gallery-img-3.png";
import image4 from "@/assets/images/gallery-page-gallery-img-4.png";
import image5 from "@/assets/images/gallery-page-gallery-img-5.png";
import image6 from "@/assets/images/gallery-page-gallery-img-6.png";
import image7 from "@/assets/images/gallery-page-gallery-img-7.png";
import image8 from "@/assets/images/gallery-page-gallery-img-8.png";
import image9 from "@/assets/images/gallery-page-gallery-img-9.png";
import { HeadingInner, HeadingWrapper, Image, ImageList, ImageWrapper, Section } from "./styles/gallery.style";
import Container from "@/components/Container";

const GallerySection = () => {
  const images: string[][] = [
    [image1, image2, image3, image4],
    [image5, image6],
    [image7, image8, image9],
  ];
  return (
    <>
      <Section>
        <Container>
          <HeadingWrapper>
            <HeadingInner>
              <HeadingSubtitle children="Our Gallery" />
              <HeadingTitle children="Check out the collection pictures from our clinic" className="lg:min-h-[104px] lg:max-w-[615px]" />
            </HeadingInner>
            <HeadingDesc
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
              className="mt-3 lg:mt-0 lg:max-w-[407px]"
            />
          </HeadingWrapper>
          <ImageList>
            {images[0].map((img, index) => (
              <ImageWrapper key={index}>
                <Image src={img} />
              </ImageWrapper>
            ))}
            {images[1].map((img, index) => (
              <ImageWrapper key={index} hiddenOnMobile>
                <Image src={img} />
              </ImageWrapper>
            ))}
            {images[2].map((img, index) => (
              <ImageWrapper key={index} hiddenOnTablet>
                <Image src={img} />
              </ImageWrapper>
            ))}
          </ImageList>
          <HeadingDesc
            children={
              <>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                  urna, porttitor rhoncus dolor purus non enim,
                </span>{" "}
                <span className="font-semibold text-black">our teams</span>.
              </>
            }
            className="mt-[66px] translate-y-[.5px] text-center lg:max-w-[660px] lg:text-left"
          />
        </Container>
      </Section>
    </>
  );
};

export default GallerySection;
