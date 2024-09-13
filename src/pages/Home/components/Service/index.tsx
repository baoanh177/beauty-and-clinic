import serviceThumb1 from "@/assets/images/service-thumb-1.png";
import serviceThumb2 from "@/assets/images/service-thumb-2.png";
import serviceThumb3 from "@/assets/images/service-thumb-3.png";
import ServiceCard from "@/components/ServiceCard";
import { Container, Desc, Heading, Services, Subtitle, Title } from "./style";

interface IService {
  name: string;
  desc: string;
  thumb: string;
}

const Service = () => {
  const services: IService[] = [
    {
      name: "Beauty consultation",
      desc: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
      thumb: serviceThumb1,
    },
    {
      name: "Skin treatments",
      desc: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
      thumb: serviceThumb2,
    },
    {
      name: "Beauty product",
      desc: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
      thumb: serviceThumb3,
    },
  ];
  return (
    <>
      {/* Service */}
      <Container>
        <Heading>
          <Subtitle>Main Services</Subtitle>
          <Title>Learn services to focus on your beauty</Title>
          <Desc>
            Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget
            nulla turpis.
          </Desc>
        </Heading>
        <Services>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </Services>
      </Container>
    </>
  );
};

export default Service;
