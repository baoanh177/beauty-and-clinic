import css from "./goToTop.module.scss"

const GoToTop = () => {
  return (
    <>
      <div
        className={css.goToTop}
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
