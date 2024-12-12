import s from "./s.module.css";
import imgArrow from "../../../public/knowmore.png";
import imageProfil from "../../../public/photoProfil.png";
import introductIcon from "../../../public/introductIcon.svg";
import fb from "../../../public/facebook.svg";
import ln from "../../../public/linkdelin.svg";
import tt from "../../../public/twitter.svg";

const About = () => {
  return (
    <div>
      <div className={s.aboutTitle}>
        <div className={s.aboutName}>
          <span className={s.aboutSpan}>ABOUT</span>
          <h2 className={s.aboutH2}>I AM BAGAVDIN</h2>
        </div>
        <div className={s.knowMore}>
          <a href="#">
            <img src={imgArrow} alt="arrowIcon" />
          </a>
        </div>
      </div>

      <div className={s.aboutMain}>
        <div className={s.imageContainerProfil}>
          <img
            className={s.imageProfile}
            src={imageProfil}
            alt="image-profil"
          />
        </div>
        <div className={s.introContainerMain}>
          <div className={s.introContainer}>
            <div className={s.introductionContainer}>
              <div className={s.introduction}>
                <img src={introductIcon} alt="introduction" />
                <span className={s.introductionTitle}>Introduction</span>
              </div>
              <div className={s.introductionText}>
                <p>
                  My journey as a frontend developer is a constant search for
                  harmony between functionality and beauty, a drive to create
                  user-friendly and inspiring interfaces that bring ideas to
                  life and make the world more convenient. Each project is a
                  story, and every line of code is a piece of my heart. Join me
                  on this journey through the world of web development, where
                  every detail matters, and every design is an opportunity to
                  inspire.
                </p>
              </div>
            </div>
          </div>
          <div className={s.contInf}>
            <div className={s.contInfContainer}>
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
                  <div className={s.socMedia}>
                    <div className={s.iconSocMedia}>
                      <img src={fb} alt="fb" />
                    </div>
                    <div className={s.iconSocMedia}>
                      <img src={ln} alt="ln" />
                    </div>
                    <div className={s.iconSocMedia}>
                      <img src={tt} alt="tt" />
                    </div>
                  </div>
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
    </div>
  );
};

export default About;
