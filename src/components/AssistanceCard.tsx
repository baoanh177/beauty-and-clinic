export interface IAssistanceCardProps {
  image: string;
  name: string;
  position: string;
  desc: string;
}

const AssistanceCard = ({ image, name, position, desc }: IAssistanceCardProps) => {
  return (
    <>
      <div className="flex items-center flex-col md:flex-row md:justify-center lg:justify-start gap-[50px] lg:gap-[172px]">
        <figure>
          <img src={image} alt="" />
        </figure>
        <article className="translate-y-[-5px] text-center md:text-left">
          <h4>
            <span className="text-lg font-semibold leading-[22.5px]">{name} /</span>{" "}
            <span className="text-sm italic leading-[17.5px]">{position}</span>
          </h4>
          <p className="mt-[19.2px] max-w-[434px] leading-6 tracking-widest text-[#8B8B8B]">{desc}</p>
        </article>
      </div>
    </>
  );
};

export default AssistanceCard;
