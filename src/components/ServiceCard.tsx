interface IServiceCardProps {
  thumb: string;
  name: string;
  desc: string;
}

const ServiceCard = ({ thumb, name, desc }: IServiceCardProps) => {
  return (
    <>
      <li className="flex min-h-[458px] basis-[343px] flex-col items-center rounded-[42px] bg-white pb-[52px] pl-[34px] pr-[35px] pt-[59px] shadow-[0px_25px_50px_25px_#f6f7ff]">
        <div className="">
          <img src={thumb} alt="" />
        </div>
        <div className="mt-[57px] flex flex-col items-center gap-1.5">
          <h3 className="min-h-[37px] translate-x-[.5px] translate-y-[-.5px] pt-px text-center text-[18px] font-semibold leading-[22.5px] text-[color:var(--title-color)]">
            {name}
          </h3>
          <p className="mt-[1px] min-w-[200px] lg:min-w-[274px] text-center text-[14px] font-normal leading-[21px] tracking-widest text-[color:var(--secondary-color)]">
            {desc}
          </p>
        </div>
      </li>
    </>
  );
};

export default ServiceCard;
