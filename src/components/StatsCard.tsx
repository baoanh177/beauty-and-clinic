import clsx from "clsx";

interface IStatsCardProps {
  title: string;
  desc: string;
  icon: string;
  isActive?: boolean;
  className?: string;
}

const StatsCard = ({ desc, icon, title, isActive, className }: IStatsCardProps) => {
  return <>
    <div className={clsx("flex gap-[11px] min-w-[197px] min-h-[69px]", isActive && "pt-[5px] items-center translate-x-[-2px]", className)}>
      <img src={icon} alt="" className="shrink-0 w-16 h-16" />
      <div className={clsx("flex flex-col", isActive ? "pt-1" : "pt-[8px]" )}>
        <strong className="text-4xl font-semibold min-h-[41px] text-white">{title}</strong>
        <span className={clsx("font-semibold leading-5 translate-y-[-2.5px]", isActive ? "text-[#FF9ACB]" : "text-[#D8DCFF]")}>{desc}</span>
      </div>
    </div>
  </>
}

export default StatsCard