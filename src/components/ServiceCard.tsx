interface IServiceCardProps {
  thumb: string;
  name: string;
  desc: string;
}

const ServiceCard = ({ thumb, name, desc }: IServiceCardProps) => {
  return (
    <>
      <li className="card">
        <div className="thumbnail">
          <img src={thumb} alt="" />
        </div>
        <div className="content">
          <h3 className="title">{name}</h3>
          <p className="desc">{desc}</p>
        </div>
      </li>
    </>
  );
};

export default ServiceCard;
