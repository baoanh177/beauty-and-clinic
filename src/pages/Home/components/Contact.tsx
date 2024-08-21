import background from "@/assets/images/contact-bg.png";
import image from "@/assets/images/contact-img.png";

const Contact = () => {
  return (
    <>
      {/* Contact */}
      <section className="contact">
        <img src={background} className="contact-bg" alt="" />
        <div className="contact-inner container">
          <figure className="contact-img">
            <img src={image} alt="" />
          </figure>
          <article className="content">
            <div className="heading">
              <span className="subtitle">Contact Us</span>
              <h2 className="title">Send your inquiry to our expert team</h2>
              <p className="desc">Lorem ipsum dolor sit amet nulla turapis tellus.</p>
            </div>
            <form action="" className="contact-form">
              <div className="form-inner">
                <div className="group">
                  <input type="text" placeholder="First name" />
                  <input type="text" placeholder="Last name" />
                </div>
                <input type="text" placeholder="Email address" />
                <input type="text" placeholder="Subject message" />
                <textarea name="" placeholder="Your inquiry here" id="" defaultValue={""} />
              </div>
              <button className="button contact-btn">Send Message</button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
};

export default Contact;
