import { IMemberCardProps } from "@/components/MemberCard";
import css from "./team.module.scss"
import clsx from "clsx";
import MemberList from "@/components/MemberList";
import Container from "@/components/Container";

export interface IMember extends Omit<IMemberCardProps, "isActive" | "css">{}

const Team = () => {
  return (
    <>
      {/* Teams */}
      <Container className={css.teams}>
        <div className={css.heading}>
          <span className={clsx(css.subtitle, "subtitle")}>Professional Teams</span>
          <h2 className={clsx(css.title, "title")}>The Professional expert</h2>
          <p className={clsx(css.desc, "desc")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
        </div>
        <MemberList />
      </Container>
    </>
  );
};

export default Team;
