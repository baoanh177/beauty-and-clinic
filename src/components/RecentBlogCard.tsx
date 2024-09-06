const RecentBlogCard = ({ image }: { image: string }) => {
  return (
    <>
      <div className="flex gap-[26px]">
        <figure className="h-[82px] w-[82px] overflow-hidden rounded-[10px]">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </figure>
        <div className="flex flex-col gap-[5px] translate-y-[-2px]">
          <time className="min-h-[25px] text-sm font-semibold leading-[21px] tracking-widest text-[#FF64AE]">01 jan 2021</time>
          <p className="max-w-[165px] text-xs leading-[18px] tracking-widest min-h-[59px] text-[#8B8B8B]">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        </div>
      </div>
    </>
  );
};

export default RecentBlogCard;
