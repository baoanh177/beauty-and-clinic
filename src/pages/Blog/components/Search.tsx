import searchIcon from "@/assets/images/search-icon.png";
import RecentBlogCard from "@/components/RecentBlogCard";
import Tag from "@/components/Tag";
import clsx from "clsx";
import fbIcon from "@/assets/images/blog-page-fb-icon.png";
import igIcon from "@/assets/images/blog-page-ig-icon.png";
import twIcon from "@/assets/images/blog-page-tw-icon.png";
import inIcon from "@/assets/images/blog-page-in-icon.png";
import image4 from "@/assets/images/blog-page-blog-img-4.png";
import image5 from "@/assets/images/blog-page-blog-img-5.png";
import image6 from "@/assets/images/blog-page-blog-img-6.png";

const Search = () => {
  return (
    <>
      <aside className="flex grow flex-col">
        {/* Search */}
        <div className="flex h-[65px] overflow-hidden rounded-full shadow-[-2px_4px_31px_9px_#F2F4FF]">
          <input
            type="text"
            className={clsx(
              "grow border-none px-[27px] py-[20px] outline-none",
              "placeholder:leading-6 placeholder:tracking-widest placeholder:text-[#8B8B8B]",
            )}
            placeholder="Search here ..."
          />
          <div className="flex w-[76px] items-center justify-center bg-[#172176]">
            <img src={searchIcon} alt="" />
          </div>
        </div>

        <div className="mt-[40px] flex flex-row flex-wrap gap-[30px] md:mt-0 md:flex-col [&>*]:grow">
          {/* Recent Post */}
          <div className="basis-full rounded-[25px] p-[58px_28px_60px_49px] shadow-[-2px_4px_31px_9px_#F2F4FF] md:mt-[76px] md:basis-0">
            <div className="pt-px font-semibold leading-5 text-[#091156]">Recent Posts</div>
            <div className="mt-[29px] flex flex-col gap-[19px]">
              <RecentBlogCard image={image4} />
              <RecentBlogCard image={image5} />
              <RecentBlogCard image={image6} />
            </div>
          </div>

          {/* Categories */}
          <div className="rounded-[25px] p-[58px_28px_49px_49px] shadow-[-2px_4px_31px_9px_#F2F4FF] md:mt-[51px]">
            <div className="pt-px font-semibold leading-5 text-[#091156]">Categories</div>
            <div className="mt-[21px] flex flex-col gap-[3px]">
              <div className="min-h-[23px] text-sm leading-[21px] tracking-widest text-[#8B8B8B]">Consultation</div>
              <div className="min-h-[23px] text-sm leading-[21px] tracking-widest text-[#8B8B8B]">Beauty</div>
              <div className="min-h-[23px] text-sm leading-[21px] tracking-widest text-[#8B8B8B]">Treatments</div>
              <div className="min-h-[23px] text-sm leading-[21px] tracking-widest text-[#8B8B8B]">News</div>
            </div>
          </div>

          {/* Categories */}
          <div className="rounded-[25px] p-[58px_28px_57px_49px] shadow-[-2px_4px_31px_9px_#F2F4FF] md:mt-[53px]">
            <div className="pt-px font-semibold leading-5 text-[#091156]">Cloud Tags</div>
            <div className="mt-[22px] grid translate-x-[-5px] grid-cols-[repeat(3,83px)] gap-[19px_7px]">
              <Tag title="beauty" />
              <Tag title="cute" />
              <Tag title="skin" />
              <Tag title="glow" />
              <Tag title="style" />
              <Tag title="clinic" />
              <Tag title="style" />
              <Tag title="great" />
              <Tag title="cute" />
            </div>
          </div>

          {/* Socials */}
          <div className="mt-[53px] hidden rounded-[25px] p-[58px_28px_57px_49px] shadow-[-2px_4px_31px_9px_#F2F4FF] md:block">
            <div className="pt-px font-semibold leading-5 text-[#091156]">Social Connect</div>
            <div className="mt-[30px] flex translate-x-[-5.3px] translate-y-[-1px] items-center gap-[21px]">
              <div className="flex h-[43px] w-[43px] items-center justify-center rounded-circle shadow-[0px_4px_19px_11px_#F6F7FF]">
                <img src={fbIcon} alt="" />
              </div>
              <div className="flex h-[43px] w-[43px] items-center justify-center rounded-circle shadow-[0px_4px_19px_11px_#F6F7FF]">
                <img src={twIcon} alt="" />
              </div>
              <div className="flex h-[43px] w-[43px] items-center justify-center rounded-circle shadow-[0px_4px_19px_11px_#F6F7FF]">
                <img src={igIcon} alt="" />
              </div>
              <div className="flex h-[43px] w-[43px] items-center justify-center rounded-circle shadow-[0px_4px_19px_11px_#F6F7FF]">
                <img src={inIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Search;
