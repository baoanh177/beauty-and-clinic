import serviceThumb1 from "@/assets/images/service-thumb-1.png";
import serviceThumb2 from "@/assets/images/service-thumb-2.png";
import serviceThumb3 from "@/assets/images/service-thumb-3.png";
import ServiceCard from "@/components/ServiceCard";
import css from "./service.module.scss"
import clsx from "clsx";

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
      <section className={clsx(css.service, "container")}>
        <div className={css.heading}>
          <span className={clsx(css.subtitle, "subtitle")}>Main Services</span>
          <h2 className={clsx(css.title, "title")}>
            Learn services to focus
            <br />
            on your beauty
          </h2>
          <p className={clsx(css.desc, "desc")}>
            Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget
            nulla turpis.
          </p>
        </div>
        <ul className={css.serviceList}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} css={css}/>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Service;
