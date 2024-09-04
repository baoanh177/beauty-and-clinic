import HeadingDesc from "@/components/HeadingDesc";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import client1 from "@/assets/images/client1.png";
import client2 from "@/assets/images/client2.png";
import client3 from "@/assets/images/client3.png";
import client4 from "@/assets/images/client4.png";
import client5 from "@/assets/images/client5.png";

const Client = () => {
  return (
    <>
      <section
        className="container !mt-[124px] pb-[53.5px]"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-once="true"
        data-aos-anchor-placement="center-center"
      >
        <div className="flex translate-x-[-13px] flex-col items-center text-center">
          <HeadingSubtitle>Our Clients</HeadingSubtitle>
          <HeadingTitle className="mt-3 min-h-[53px]">Well-known agencies</HeadingTitle>
          <HeadingDesc className="translate-x-[.5 px] mt-[11.8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</HeadingDesc>
        </div>
        <ul
          className="mt-[100.5px] flex h-auto items-end justify-center flex-wrap gap-[58px]"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-once="true"
          data-aos-anchor-placement="center-center"
        >
          <li className="ml-[-5px] translate-x-[5px]">
            <img src={client1} alt="" className="w-[147px]" />
          </li>
          <li>
            <img src={client2} alt="" className="w-[147px]" />
          </li>
          <li>
            <img src={client3} alt="" className="w-[147px]" />
          </li>
          <li>
            <img src={client4} alt="" className="w-[147px]" />
          </li>
          <li>
            <img src={client5} alt="" className="w-[147px]" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Client;
