import background from "@/assets/images/blog-page-heading-bg.png";
import Container from "@/components/Container";
import HeadingTitle from "@/components/HeadingTitle";

const Heading = () => {
  return (
    <>
      <section className="relative mt-9">
        <img src={background} alt="" className="w-full h-full object-cover min-h-[200px]" />
        <div className="absolute inset-0 flex h-full w-full items-center">
          <Container className="flex items-center justify-between flex-wrap gap-5 translate-y-[1px]">
            <HeadingTitle children="Blog" className="text-white translate-x-[-1px]" />
            <div className="font-medium leading-6 tracking-widest text-[#D9D9D9] translate-x-[2.5px]">Home • Blog</div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Heading;
