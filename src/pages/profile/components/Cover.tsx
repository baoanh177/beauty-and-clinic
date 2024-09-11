const Cover = () => {
  return (
    <>
      <section className="relative block h-[500px] mt-5">
        <div
          className="absolute top-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")',
          }}
        >
          <span id="blackOverlay" className="absolute h-full w-full bg-black opacity-50" />
        </div>
        <div
          className="h-70-px pointer-events-none absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x={0}
            y={0}
          >
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Cover;
