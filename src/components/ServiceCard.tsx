interface IServiceCardProps {
  thumb: string;
  name: string;
  desc: string;
  css: Record<string, string>
}

const ServiceCard = ({ thumb, name, desc, css }: IServiceCardProps) => {
  return (
    <>
      <li className={css.card}>
        <div className={css.thumbnail}>
          <img src={thumb} alt="" />
        </div>
        <div className={css.content}>
          <h3 className={css.title}>{name}</h3>
          <p className={css.desc}>{desc}</p>
        </div>
      </li>
    </>
  );
};

export default ServiceCard;
