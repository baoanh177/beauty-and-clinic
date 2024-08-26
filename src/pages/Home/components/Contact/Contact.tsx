import background from "@/assets/images/contact-bg.png";
import image from "@/assets/images/contact-img.png";
import css from "./contact.module.scss"
import clsx from "clsx";

const Contact = () => {
  return (
    <>
      {/* Contact */}
      <section className={css.contact}>
        <img src={background} className={css.contactBg} alt="" />
        <div className={clsx(css.contactInner, "container")}>
          <figure className={css.contactImg}>
            <img src={image} alt="" />
          </figure>
          <article className={css.content}>
            <div className={css.heading}>
              <span className={clsx(css.subtitle, "subtitle")}>Contact Us</span>
              <h2 className={clsx(css.title, "title")}>Send your inquiry to our expert team</h2>
              <p className={clsx(css.desc, "desc")}>Lorem ipsum dolor sit amet nulla turapis tellus.</p>
            </div>
            <form action="" className={css.contactForm}>
              <div className={css.formInner}>
                <div className={css.group}>
                  <input type="text" placeholder="First name" />
                  <input type="text" placeholder="Last name" />
                </div>
                <input type="text" placeholder="Email address" />
                <input type="text" placeholder="Subject message" />
                <textarea name="" placeholder="Your inquiry here" id="" defaultValue={""} />
              </div>
              <button className={clsx(css.contactBtn, "button")}>Send Message</button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
};

export default Contact;
