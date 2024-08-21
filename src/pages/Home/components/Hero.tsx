// import "@/assets/css/components/hero.css"
import background from "@/assets/images/hero-bg.svg"
import img from "@/assets/images/hero-img.png"
import Button from "@/components/Button";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <img className="hero-background" src={background} />
      <section className="hero container">
        <div className="hero-inner">
          <article className="hero-content">
            <h2 className="title">Clinic &amp; beauty consultant</h2>
            <p className="desc">It is a long established fact that a reader will be by the readable content of a page.</p>
            <Button className="hero-btn">More Details</Button>
          </article>
          <figure className="hero-image">
            <img src={img} alt="" />
          </figure>
        </div>
        <div className="pagination">
          <div className="pagination-item" />
          <div className="pagination-item active" />
          <div className="pagination-item" />
        </div>
      </section>
    </>
  );
};

export default Hero;
