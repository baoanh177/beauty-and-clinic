const GoToTop = () => {
  return (
    <>
      <div
        className="go-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </>
  );
};

export default GoToTop;
