import s from "./s.module.css";
// import imgArrow from "../../../public/knowmore.png";
import imageProfil from "../../../public/photoProfil.png";
import introductIcon from "../../../public/introductIcon.svg";
import SocMedia from "../SocMedia/SocMedia";

const About = () => {
  return (
    <div>
      <div className={s.aboutTitle}>
        <div className={s.aboutName}>
          <span className={s.aboutSpan}>ABOUT</span>
          <h2 className={s.aboutH2}>I AM BAGAVDIN</h2>
        </div>
        <a className={s.servicesA} href="#About">
          <div className={s.servicesDivA}>
          <span>Know More {'\u2192'}</span>
          </div>
        </a>
      </div>

      <div id="About" className={s.aboutMain}>
        <div className={s.imageContainerProfil}>
          <img
            className={s.imageProfile}
            src={imageProfil}
            alt="image-profil"
          />
        </div>
        <div className={s.introContainerMain}>
          <div className={s.introductionContainer}>
            <div className={s.introduction}>
              <img src={introductIcon} alt="introduction" />
              <span className={s.introductionTitle}>Introduction</span>
            </div>
            <div className={s.introductionText}>
              <p>
                My journey as a frontend developer is a constant search for
                harmony between functionality and beauty, a drive to create
                user-friendly and inspiring interfaces that bring ideas to life
                and make the world more convenient. Each project is a story, and
                every line of code is a piece of my heart. Join me on this
                journey through the world of web development, where every detail
                matters, and every design is an opportunity to inspire.
              </p>
            </div>
          </div>
          <div id="contact" className={s.contInf}>
            <div className={s.contInfTitle}>
              <img src={introductIcon} alt="introduction" />
              <span className={s.contInfTextTitle}>Contact Information</span>
            </div>
            <div className={s.allContactDiv}>
              <div className={s.contData}>
                <div className={s.contDataEmail}>
                  <span className={s.emailTitle}>Email</span>
                  <p className={s.emailContact}>damienbraun@gmail.com</p>
                </div>
                <div className={s.contDataNumber}>
                  <span className={s.numberTitle}>Phone Number</span>
                  <p className={s.numberContact}>+00 000000000</p>
                </div>
              </div>
              <div className={s.contDataSocMedia}>
                <SocMedia />
                <div className={s.socMediaBtn}>
                  <a href="#">Let's Work</a>
                </div>
                <div className={s.socMediaBtn}>
                  <a href="#">Download CV</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
