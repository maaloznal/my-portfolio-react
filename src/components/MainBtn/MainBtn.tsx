import s from "./s.module.css";
import workUrl from "../../../public/letsworkicon.svg";

const MainBtn = () => {
  return (
    <a className={s.btnLetswork} href="#">
      <img className={s.workUrl} src={workUrl} alt="icon" />
    </a>
  );
};

export default MainBtn;
