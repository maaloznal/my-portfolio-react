import s from "./s.module.css";
import fb from "../../../public/facebook.svg";
import ln from "../../../public/linkdelin.svg";
import tt from "../../../public/twitter.svg";

const SocMedia = () => {
  return (
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
  );
};

export default SocMedia;
