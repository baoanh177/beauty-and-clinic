import playIcon from "@/assets/images/play-btn-icon.png"
import image from "@/assets/images/about-img.png"

const About = () => {
  return (
    <>
      {/* About */}
      <section className="about">
        <img src="./assets/images/about-bg.png" className="about-bg" alt="" />
        <div className="about-inner container">
          <article className="content">
            <span className="subtitle">About Us</span>
            <h2 className="title">We are the best beauty clinic</h2>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
              </p>
              <p>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
            </div>
            <div className="actions">
              <button className="learn-more-btn button">Learn More</button>
              <div className="watch-btn">
                <img src={playIcon} alt="" />
                <span>Watch Video</span>
              </div>
            </div>
          </article>
          <figure className="about-image">
            <img src={image} alt="" />
          </figure>
        </div>
      </section>
    </>
  );
};

export default About;
