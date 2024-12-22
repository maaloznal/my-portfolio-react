import SocMedia from "../SocMedia/SocMedia";
import s from "./s.module.css";

const BottomSection = () => {
  return (
    <div className={s.BottomSection}>
      <div className={s.BottomSectionContiner}>
        <div className={s.BottomSectionMainDiv}>
          <div className={s.BottomSpan}>
            <span className={s.SpanBottom}>Terms & Conditions</span>
            <span className={s.SpanBottom}>Privacy Policy</span>
          </div>
          <SocMedia />
          <div className={s.SpanBottomLastDiv}>
            <span className={s.SpanBottom}>© 2024 Damien Braun Photography. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
