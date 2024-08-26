import clsx from "clsx";
import twitter from "@/assets/images/twitter-icon.png";
import facebook from "@/assets/images/facebook-icon.png";
import ig from "@/assets/images/ig-icon.png";
import { useRef } from "react";

export interface IMemberCardProps {
  role: string;
  name: string;
  desc: string;
  avatar: string;
  css: Record<string, string>
}

const MemberCard = ({ role, name, desc, avatar, css }: IMemberCardProps) => {
  const cardRef = useRef<HTMLLIElement>(null)

  return (
    <>
      <li className={clsx(css.card)} ref={cardRef}>
        <div className={css.avatar}>
          <img src={avatar} alt="" />
        </div>
        <div className={css.content}>
          <span className={css.role}>{role}</span>
          <h3 className={css.name}>{name}</h3>
          <p className={css.desc}>{desc}</p>
        </div>
        <ul className={css.socials}>
          <li className={css.socialItem}>
            <img src={twitter} alt="" />
          </li>
          <li className={css.socialItem}>
            <img src={facebook} alt="" />
          </li>
          <li className={css.socialItem}>
            <img src={ig} alt="" />
          </li>
        </ul>
      </li>
    </>
  );
};

export default MemberCard;
