import LetsWork from "../LetsWork/LetsWork";
import s from "./s.module.css";
import FooterIconLeft from "../../../public/FooterIconLeft.svg";
import FooterIconRight from "../../../public/FooterIconRight.svg";

const Footer = () => {
  return (
    <div className={s.FooterSection}>
      <img src={FooterIconRight} alt="Footer Icon Right" />
      <div className={s.FooterMainDiv}>
        <div className={s.FooterDiv}>
          <div className={s.LetsWork}>
            <span className={s.LetsWorkSpan}>
              A more meaningful solution for your ideas
            </span>
            <div>
              <LetsWork />
            </div>
          </div>
          <div className={s.Links}>
            <div className={s.LinksElemDiv}>
              <span className={s.LinkSpan}>Home</span>
              <a href="#">About Me</a>
              <a href="#">My Works</a>
              <a href="#">Testimonials</a>
            </div>
            <div className={s.LinksElemDiv}>
              <span className={s.LinkSpan}>Clients</span>
              <a href="#">Klovesto</a>
              <a href="#">Nukeway</a>
              <a href="#">Cloven’s</a>
              <a href="#">MenVol</a>
            </div>
            <div className={s.LinksElemDiv}>
              <span className={s.LinkSpan}>Portfolio</span>
              <a href="#">Events</a>
              <a href="#">Portrait</a>
              <a href="#">Branding</a>
              <a href="#">Commerciale</a>
              <a href="#">Wedding</a>
            </div>
            <div className={s.LinksElemDiv}>
              <span className={s.LinkSpan}>Services</span>
              <a href="#">Portraits</a>
              <a href="#">Events</a>
              <a href="#">Commercial</a>
            </div>
          </div>
        </div>
      </div>
      <img src={FooterIconLeft} alt="Footer Icon Left" />
    </div>
  );
};

export default Footer;
