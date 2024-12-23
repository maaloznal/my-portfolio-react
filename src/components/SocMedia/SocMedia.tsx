import s from "./s.module.css";
import fb from "../../../public/facebook.svg";
import ln from "../../../public/linkdelin.svg";
import tt from "../../../public/twitter.svg";

const SocMedia = () => {
  return (
    <div className={s.socMedia}>
      <a href="№">
        <div className={s.iconSocMedia}>
          <img src={fb} alt="fb" />
        </div>
      </a>
      <a href="№">
        <div className={s.iconSocMedia}>
          <img src={ln} alt="ln" />
        </div>
      </a>
      <a href="№">
        <div className={s.iconSocMedia}>
          <img src={tt} alt="tt" />
        </div>
      </a>
    </div>
  );
};

export default SocMedia;
