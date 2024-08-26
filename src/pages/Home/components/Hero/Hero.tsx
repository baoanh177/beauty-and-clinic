import background from "@/assets/images/hero-bg.svg"
import img from "@/assets/images/hero-img.png"
import Button from "@/components/Button/Button";
import css from "./hero.module.scss"
import clsx from "clsx";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <img className={css.heroBackground} src={background} />
      <section className={clsx(css.hero, "container")}>
        <div className={css.heroInner}>
          <article className={css.heroContent}>
            <h2 className={clsx(css.title, "title")}>Clinic &amp; beauty consultant</h2>
            <p className={clsx(css.desc, "desc")}>It is a long established fact that a reader will be by the readable content of a page.</p>
            <Button className={css.heroBtn}>More Details</Button>
          </article>
          <figure className={css.heroImage}>
            <img src={img} alt="" />
          </figure>
        </div>
        <div className={css.pagination}>
          <div className={css.paginationItem} />
          <div className={clsx(css.paginationItem, css.active)} />
          <div className={css.paginationItem} />
        </div>
      </section>
    </>
  );
};

export default Hero;
