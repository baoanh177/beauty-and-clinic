import clsx from "clsx";

interface IStatsCardProps {
  title: string;
  desc: string;
  icon: string;
  isStrong?: boolean;
}

const StatsCard = ({ desc, icon, title, isStrong }: IStatsCardProps) => {
  return <>
    <div className={clsx("flex gap-[11px] min-w-[197px] min-h-[69px]", isStrong && "items-center")}>
      <img src={icon} alt="" />
      <div className={clsx("flex flex-col", !isStrong && "pt-[5px]" )}>
        <strong className="text-4xl font-semibold min-h-[41px] text-white">{title}</strong>
        <span className={clsx("font-semibold leading-5", isStrong ? "text-[#FF9ACB]" : "text-[#D8DCFF]")}>{desc}</span>
      </div>
    </div>
  </>
}

export default StatsCard