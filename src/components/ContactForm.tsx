import clsx from "clsx";

const ContactForm = ({ className }: { className?: string }) => {
  return (
    <>
      <form action="" className={className}>
        <div className={"ml-px mt-[44px] flex w-full flex-wrap gap-[39px_35px]"}>
          <div className={clsx("flex grow gap-[35px] max-lg:flex-col")}>
            <input
              type="text"
              placeholder="First name"
              className={clsx(
                "box-border block h-[61px] w-full grow basis-[400px] rounded-[15px] border border-solid border-[#d9ddfe] bg-white px-6 py-[17px] max-lg:basis-0",
                "placeholder:-translate-x-[.5px] placeholder:-translate-y-[2px] placeholder:leading-[24px] placeholder:tracking-widest placeholder:text-[color:var(--placeholder-color)]",
              )}
            />
            <input
              type="text"
              placeholder="Last name"
              className={clsx(
                "placeholder:-translate-y-[1.9px] placeholder:translate-x-[3.2px] placeholder:leading-[24px] placeholder:tracking-widest placeholder:text-[color:var(--placeholder-color)]",
                "box-border block h-[61px] w-full grow basis-[400px] rounded-[15px] border border-solid border-[#d9ddfe] bg-white px-6 py-[17px] max-lg:basis-0",
              )}
            />
          </div>
          <input
            type="text"
            placeholder="Email address"
            className={clsx(
              "box-border block h-[61px] w-full grow basis-[400px] rounded-[15px] border border-solid border-[#d9ddfe] bg-white px-6 py-[17px]",
              "placeholder:-translate-x-[.5px] placeholder:-translate-y-[2px] placeholder:leading-[24px] placeholder:tracking-widest placeholder:text-[color:var(--placeholder-color)]",
            )}
          />
          <input
            type="text"
            placeholder="Subject message"
            className={clsx(
              "box-border block h-[61px] w-full grow basis-[400px] rounded-[15px] border border-solid border-[#d9ddfe] bg-white px-6 py-[17px]",
              "placeholder:-translate-x-[.5px] placeholder:-translate-y-[2px] placeholder:leading-[24px] placeholder:tracking-widest placeholder:text-[color:var(--placeholder-color)]",
            )}
          />
          <textarea
            name=""
            placeholder="Your inquiry here"
            className={clsx(
              "box-border block h-[61px] w-full grow basis-[400px] rounded-[15px] border border-solid border-[#d9ddfe] bg-white px-6 py-[17px]",
              "placeholder:-translate-x-[.5px] placeholder:-translate-y-[2px] placeholder:pt-[2px] placeholder:leading-[24px] placeholder:tracking-widest placeholder:text-[color:var(--placeholder-color)]",
              "mt-[-1px] !h-[239px] resize-none !py-[25px] px-6",
            )}
          />
        </div>
        <button
          className={clsx(
            "ml-[2px] mt-[55px] min-h-[58px] min-w-[248px] pb-4 pl-[37px] pr-[38px] pt-[13px] shadow-[0px_17px_22px_0px_#ffedf6]",
            "button",
          )}
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
