const Tag = ({ title }: { title: string }) => {
  return (
    <>
      <div className="flex h-[26px] w-[82px] items-center justify-center rounded-full pb-[2px] text-[#8B8B8B] shadow-[0px_4px_17px_0px_#EEF0FF]">
        {title}
      </div>
    </>
  );
};

export default Tag;
