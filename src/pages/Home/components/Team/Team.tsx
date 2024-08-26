import avatar1 from "@/assets/images/team-avatar-1.png"
import avatar2 from "@/assets/images/team-avatar-2.png"
import avatar3 from "@/assets/images/team-avatar-3.png"
import MemberCard, { IMemberCardProps } from "@/components/MemberCard";
import css from "./team.module.scss"
import clsx from "clsx";

interface IMember extends Omit<IMemberCardProps, "isActive" | "css">{}

const Team = () => {
  const members: IMember[] = [
    {
      role: "Surgeon",
      name: "Briyan Nevalli",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
      avatar: avatar1
    },
    {
      role: "Dermatologist",
      name: "Bella sebastian",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
      avatar: avatar2
    },
    {
      role: "Stylist expert",
      name: "Lilly Adams",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
      avatar: avatar3
    }
  ]
  return (
    <>
      {/* Teams */}
      <section className={clsx(css.teams, "container")}>
        <div className={css.heading}>
          <span className={clsx(css.subtitle, "subtitle")}>Professional Teams</span>
          <h2 className={clsx(css.title, "title")}>The Professional expert</h2>
          <p className={clsx(css.desc, "desc")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
        </div>
        <ul className={css.memberList}>
          {members.map((mem, index) => <MemberCard key={index} {...mem} css={css}/>)}
        </ul>
      </section>
    </>
  );
};

export default Team;
