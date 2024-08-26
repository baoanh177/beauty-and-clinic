import BlogCard from "@/components/BlogCard";
import HeadingSubtitle from "@/components/HeadingSubtitle";
import HeadingTitle from "@/components/HeadingTitle";
import HeadingDesc from "@/components/Logo/HeadingDesc";
import blogThumb1 from "@/assets/images/blog-thumb1.png";
import blogThumb2 from "@/assets/images/blog-thumb2.png";
import blogThumb3 from "@/assets/images/blog-thumb3.png";
import blogBg from "@/assets/images/blog-bg.png";

const Blog = () => {
  return (
    <>
      <section className="relative mt-[111px]">
        <img src={blogBg} className="absolute left-0 right-0 top-0 -z-10 translate-y-[-145px] object-cover" alt="" />
        <div className="container">
          <div className="flex flex-col items-center gap-3 text-center" data-aos="fade-up" data-aos-duration={1000} data-aos-once="true">
            <HeadingSubtitle>The Blog</HeadingSubtitle>
            <HeadingTitle className="min-h-[50px]">Our latest news</HeadingTitle>
            <HeadingDesc className="min-h-[34px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</HeadingDesc>
          </div>
          <div className="mt-[79px] flex flex-wrap gap-[49px]" data-aos="fade-up" data-aos-duration={1000} data-aos-once="true">
            <BlogCard
              className="grow basis-[300px]"
              title="How much does a consultation cost at our clinic?"
              content="A wonderful serenity has taken possession of my entire soul, like these sweet mornings ..."
              thumb={blogThumb1}
            />
            <BlogCard
              className="grow basis-[300px]"
              title="Watch out! don't choose the wrong beauty product"
              content="A wonderful serenity has taken possession of my entire soul, like these sweet mornings ..."
              thumb={blogThumb2}
            />
            <BlogCard
              className="grow basis-[300px]"
              title="About skin care you need to know"
              content="A wonderful serenity has taken possession of my entire soul, like these sweet mornings ..."
              thumb={blogThumb3}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
