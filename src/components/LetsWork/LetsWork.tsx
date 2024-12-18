import MainBtn from "../MainBtn/MainBtn";
import s from "./s.module.css";

const LetsWork = () => {
  return (
    <div className={s.letsWork}>
      <div className={s.textAndBtn}>
        <h2 className={s.textLetswork}>Let’s</h2>
        <MainBtn />
      </div>
      <div className="text">
        <h2 className={s.textwork}>WORK TOGETHER</h2>
      </div>
    </div>
  );
};

export default LetsWork;
