import serviceThumb1 from "@/assets/images/service-thumb-1.png";
import serviceThumb2 from "@/assets/images/service-thumb-2.png";
import serviceThumb3 from "@/assets/images/service-thumb-3.png";
import ServiceCard from "@/components/ServiceCard";

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
      <section className="service container">
        <div className="heading">
          <span className="subtitle">Main Services</span>
          <h2 className="title">
            Learn services to focus
            <br />
            on your beauty
          </h2>
          <p className="desc">
            Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget
            nulla turpis.
          </p>
        </div>
        <ul className="service-list">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Service;
