import background from "@/assets/images/footer-bg.png";
import Logo from "@/components/Logo";
import fb from "@/assets/images/footer-fb-icon.png"
import twiiter from "@/assets/images/footer-twiiter-icon.png"
import ytb from "@/assets/images/footer-ytb-icon.png"
import ig from "@/assets/images/footer-ig-icon.png"
import linkin from "@/assets/images/footer-in.png"

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <img src={background} alt="" className="footer-bg" />
        <div className="content container">
          <div className="information">
            <Logo type="light"/>
            <div className="information-content">
              <div className="info-1">
                <strong>Beautice</strong> is a Beauty Clinic WordPress Theme.
              </div>
              <p className="address">Baker Steet 101, NY, United States.</p>
              <div className="row">
                <span className="phone">+521 569 8966.</span>
                <a href="mailto:mail@company.com" className="email">
                  mail@company.com.
                </a>
              </div>
            </div>
          </div>
          <div className="pages">
            <div className="col-1">
              <h4 className="col-title -ml-1">Pages</h4>
              <ul className="page-list">
                <li className="item">
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Home</span>
                  </a>
                </li>
                <li className="item">
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>About</span>
                  </a>
                </li>
                <li className="item">
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Service</span>
                  </a>
                </li>
                <li className="item">
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Gallery</span>
                  </a>
                </li>
                <li className="item">
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Team</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <h4 className="col-title -ml-1">Informations</h4>
              <ul className="page-list">
                <li className="item">
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Terms &amp; conditions</span>
                  </a>
                </li>
                <li className="item">
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Privacy policys</span>
                  </a>
                </li>
                <li className="item">
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Blog</span>
                  </a>
                </li>
                <li className="item">
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row container">
          <ul className="socials">
            <li className="social-icon">
              <img src={fb} alt="" />
            </li>
            <li className="social-icon">
              <img src={twiiter} alt="" />
            </li>
            <li className="social-icon">
              <img src={linkin} alt="" />
            </li>
            <li className="social-icon">
              <img src={ytb} alt="" />
            </li>
            <li className="social-icon">
              <img src={ig} alt="" />
            </li>
          </ul>
          <p className="copyright">© AltDesain Studio 2021 - All right reserved.</p>
        </div>
        <div className="footer-bottom-bg" />
      </footer>
    </>
  );
};

export default Footer;
