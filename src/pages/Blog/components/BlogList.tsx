import BlogLargeCard, { IBlogLargeCardProps } from "@/components/BlogLargeCard";
import image1 from "@/assets/images/blog-page-blog-img-1.png";
import image2 from "@/assets/images/blog-page-blog-img-2.png";
import image3 from "@/assets/images/blog-page-blog-img-3.png";

const BlogList = () => {
  const blogs: IBlogLargeCardProps[] = [
    {
      title: "How much does a consultation cost at our clinic?",
      category: "Consultation",
      image: image1,
    },
    {
      title: "Watch out! don't choose the wrong beauty product",
      category: "Beauty",
      image: image2,
    },
    {
      title: "About skin care you need to know",
      category: "Treatments",
      image: image3,
      className: "translate-y-[-1px]"
    },
  ];
  return (
    <>
      <div className="flex w-full md:w-[64%] flex-col gap-[30px] md:gap-[133px]">
        {blogs.map((blog, index) => (
          <BlogLargeCard {...blog} key={index} />
        ))}
      </div>
    </>
  );
};

export default BlogList;
