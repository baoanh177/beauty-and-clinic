import BlogList from "./components/BlogList";
import Heading from "./components/Heading";
import Search from "./components/Search";
import fbIcon from "@/assets/images/blog-page-fb-icon.png";
import igIcon from "@/assets/images/blog-page-ig-icon.png";
import twIcon from "@/assets/images/blog-page-tw-icon.png";
import inIcon from "@/assets/images/blog-page-in-icon.png";
import Container from "@/components/Container";

const Blog = () => {
  return (
    <>
      <Heading />
      <Container>
        <div className="flex flex-col-reverse gap-[40px] pt-[108px] md:flex-row md:gap-[60px]">
          <BlogList />
          <Search />
        </div>
        <div className="mt-[95px] flex translate-x-[8px] justify-center gap-[16px] pb-0">
          <div className="flex h-[35px] w-[35px] items-center justify-center rounded-circle bg-[#172176] text-white shadow-[0px_7px_37px_4px_#E6E9FF] transition-colors">
            1
          </div>
          <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-circle transition-colors hover:bg-gray-50">
            2
          </div>
          <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-circle transition-colors hover:bg-gray-50">
            3
          </div>
        </div>

        {/* Socials */}
        <div className="mt-[83px] block rounded-[25px] p-[58px_28px_57px_49px] shadow-[-2px_4px_31px_9px_#F2F4FF] md:hidden text-center">
          <div className="pt-px font-semibold leading-5 text-[#091156]">Social Connect</div>
          <div className="mt-[30px] flex flex-wrap justify-center translate-x-[-5.3px] translate-y-[-1px] items-center gap-[21px]">
            <div className="flex shrink-0 h-[43px] w-[43px] items-center justify-center rounded-circle shadow-[0px_4px_19px_11px_#F6F7FF]">
              <img src={fbIcon} alt="" />
            </div>
            <div className="flex shrink-0 h-[43px] w-[43px] items-center justify-center rounded-circle shadow-[0px_4px_19px_11px_#F6F7FF]">
              <img src={twIcon} alt="" />
            </div>
            <div className="flex shrink-0 h-[43px] w-[43px] items-center justify-center rounded-circle shadow-[0px_4px_19px_11px_#F6F7FF]">
              <img src={igIcon} alt="" />
            </div>
            <div className="flex shrink-0 h-[43px] w-[43px] items-center justify-center rounded-circle shadow-[0px_4px_19px_11px_#F6F7FF]">
              <img src={inIcon} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
