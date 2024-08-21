import avatar1 from "@/assets/images/team-avatar-1.png"
import avatar2 from "@/assets/images/team-avatar-2.png"
import avatar3 from "@/assets/images/team-avatar-3.png"
import MemberCard, { IMemberCardProps } from "@/components/MemberCard";

interface IMember extends Omit<IMemberCardProps, "isActive">{}

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
      <section className="teams container">
        <div className="heading">
          <span className="subtitle">Professional Teams</span>
          <h2 className="title">The Professional expert</h2>
          <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
        </div>
        <ul className="member-list">
          {members.map((mem, index) => <MemberCard key={index} {...mem} isActive={index === 1}/>)}
        </ul>
      </section>
    </>
  );
};

export default Team;
