import AssistanceCard from "@/components/AssistanceCard";
import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import image1 from "@/assets/images/team-page-assistance-img-1.png";
import image2 from "@/assets/images/team-page-assistance-img-2.png";
import image3 from "@/assets/images/team-page-assistance-img-3.png";
import Container from "@/components/Container";

const Assistance = () => {
  return (
    <>
      <section className="mt-[154px]">
        <Container>
          <div className="flex flex-col items-center">
            <HeadingSubtitle children="Assistance Team" />
            <HeadingTitle children="Meet the pro assistance" className="mt-3 min-h-[57px]" />
            <HeadingDesc children="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam." className="text-center xl:text-left mt-3 min-h-[28px]" />
          </div>
          <div className="mt-[109.5px] flex flex-col gap-[79px]">
            <AssistanceCard
              image={image1}
              name="Lina Gustav"
              position="Pharmacist"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque."
            />
            <AssistanceCard
              image={image2}
              name="Adam White"
              position="Finance"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque."
            />
            <AssistanceCard
              image={image3}
              name="Jane Doe"
              position="Marketer"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque."
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Assistance;
