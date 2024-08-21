import clsx from "clsx";

import twitter from "@/assets/images/twitter-icon.png";
import facebook from "@/assets/images/facebook-icon.png";
import ig from "@/assets/images/ig-icon.png";

export interface IMemberCardProps {
  role: string;
  name: string;
  desc: string;
  avatar: string;
  isActive?: boolean;
}

const MemberCard = ({ role, name, desc, avatar, isActive }: IMemberCardProps) => {
  return (
    <>
      <li className={clsx("card", isActive && "active")}>
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="content">
          <span className="role">{role}</span>
          <h3 className="name">{name}</h3>
          <p className="desc">{desc}</p>
        </div>
        <ul className="socials">
          <li className="social-item">
            <img src={twitter} alt="" />
          </li>
          <li className="social-item">
            <img src={facebook} alt="" />
          </li>
          <li className="social-item">
            <img src={ig} alt="" />
          </li>
        </ul>
      </li>
    </>
  );
};

export default MemberCard;
