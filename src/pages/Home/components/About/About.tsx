import playIcon from "@/assets/images/play-btn-icon.png";
import image from "@/assets/images/about-img.png";
import background from "@/assets/images/about-bg.png";
import css from "./about.module.scss";
import clsx from "clsx";
import Container from "@/components/Container";

const About = () => {
  return (
    <>
      {/* About */}
      <section className={css.about}>
        <img src={background} className={css.aboutBg} alt="" />
        <Container className={css.aboutInner}>
          <article className={css.content}>
            <span className={clsx(css.subtitle, "subtitle")}>About Us</span>
            <h2 className={clsx(css.title, "title")}>We are the best beauty clinic</h2>
            <div className={clsx(css.desc, "desc")}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
              </p>
              <p>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
            </div>
            <figure className={css.aboutImageMobile}>
              <img src={image} alt="" />
            </figure>
            <div className={css.actions}>
              <button className={clsx(css.learnMoreBtn, "button")}>Learn More</button>
              <div className={css.watchBtn}>
                <img src={playIcon} alt="" />
                <span>Watch Video</span>
              </div>
            </div>
          </article>
          <figure className={css.aboutImage}>
            <img src={image} alt="" />
          </figure>
        </Container>
      </section>
    </>
  );
};

export default About;
