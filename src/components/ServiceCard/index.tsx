import { Content, Desc, Image, ServiceItem, ThumbnailWrapper, Title } from "./style";

interface IServiceCardProps {
  thumb: string;
  name: string;
  desc: string;
}

const ServiceCard = ({ thumb, name, desc }: IServiceCardProps) => {
  return (
    <>
      <ServiceItem>
        <ThumbnailWrapper>
          <Image src={thumb} alt="" />
        </ThumbnailWrapper>
        <Content>
          <Title children={name} />
          <Desc children={desc} />
        </Content>
      </ServiceItem>
    </>
  );
};

export default ServiceCard;
