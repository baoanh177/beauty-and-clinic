import background from "@/assets/images/footer-bg.png";
import Logo from "@/components/Logo/Logo";
import fb from "@/assets/images/footer-fb-icon.png"
import twiiter from "@/assets/images/footer-twiiter-icon.png"
import ytb from "@/assets/images/footer-ytb-icon.png"
import ig from "@/assets/images/footer-ig-icon.png"
import linkin from "@/assets/images/footer-in.png"
import css from "./footer.module.scss"
import clsx from "clsx";

const Footer = ({ className }: { className?: string }) => {
  return (
    <>
      {/* Footer */}
      <footer className={clsx(css.footer, className)}>
        <img src={background} alt="" className={css.footerBg} />
        <div className={clsx(css.content, "container")}>
          <div className={css.information}>
            <Logo type="light"/>
            <div className={css.informationContent}>
              <div className={css.info1}>
                <strong>Beautice</strong> is a Beauty Clinic WordPress Theme.
              </div>
              <p className={css.address}>Baker Steet 101, NY, United States.</p>
              <div className={css.row}>
                <span className={css.phone}>+521 569 8966.</span>
                <a href="mailto:mail@company.com" className={css.email}>
                  mail@company.com.
                </a>
              </div>
            </div>
          </div>
          <div className={css.pages}>
            <div className={css.col1}>
              <h4 className={clsx(css.colTitle, "-ml-1")}>Pages</h4>
              <ul className={css.pageList}>
                <li className={css.item}>
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Home</span>
                  </a>
                </li>
                <li className={css.item}>
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>About</span>
                  </a>
                </li>
                <li className={css.item}>
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Services</span>
                  </a>
                </li>
                <li className={css.item}>
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Gallery</span>
                  </a>
                </li>
                <li className={css.item}>
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Team</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className={css.col2}>
              <h4 className={clsx(css.colTitle, "-ml-1")}>Informations</h4>
              <ul className={css.pageList}>
                <li className={css.item}>
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Terms &amp; conditions</span>
                  </a>
                </li>
                <li className={css.item}>
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Privacy policy</span>
                  </a>
                </li>
                <li className={css.item}>
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Blog</span>
                  </a>
                </li>
                <li className={css.item}>
                  <a href="" className="flex items-center gap-3">
                    <i className="fa-solid fa-caret-right text-[10px]" />
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={clsx(css.row, "container")}>
          <ul className={css.socials}>
            <li className={css.socialIcon}>
              <img src={fb} alt="" />
            </li>
            <li className={css.socialIcon}>
              <img src={twiiter} alt="" />
            </li>
            <li className={css.socialIcon}>
              <img src={linkin} alt="" />
            </li>
            <li className={css.socialIcon}>
              <img src={ytb} alt="" />
            </li>
            <li className={css.socialIcon}>
              <img src={ig} alt="" />
            </li>
          </ul>
          <p className={css.copyright}>© AltDesain Studio 2021 - All right reserved.</p>
        </div>
        <div className={css.footerBottomBg} />
      </footer>
    </>
  );
};

export default Footer;
