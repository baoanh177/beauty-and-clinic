import avatar1 from "@/assets/images/team-avatar-1.png";
import avatar2 from "@/assets/images/team-avatar-2.png";
import avatar3 from "@/assets/images/team-avatar-3.png";
import { IMember } from "@/pages/Home/components/Team/Team";
import MemberCard from "./MemberCard";
import clsx from "clsx";

const MemberList = ({ className }: { className?: string }) => {
  const members: IMember[] = [
    {
      role: "Surgeon",
      name: "Briyan Nevalli",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
      avatar: avatar1,
    },
    {
      role: "Dermatologist",
      name: "Bella sebastian",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
      avatar: avatar2,
    },
    {
      role: "Stylist expert",
      name: "Lilly Adams",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
      avatar: avatar3,
    },
  ];
  return (
    <>
      <ul className={clsx("mt-[83px] flex items-center justify-center gap-[60px] max-[1200px]:flex-col max-[1200px]:gap-5", className)}>
        {members.map((mem, index) => (
          <MemberCard key={index} {...mem} className="pt-[90px]" />
        ))}
      </ul>
    </>
  );
};

export default MemberList;
