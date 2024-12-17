import s from "./s.module.css";
import Star from "../../../public/Star.svg";
import SocMedia from "../SocMedia/SocMedia";

const CardReviwes = () => {
  return (
    <div className={s.ReviewClientCard}>
      <div className={s.DataClient}>
        <div className={s.NameLocationClientCont}>
          <span className={s.NameClientSpan}>Emily Johnson</span>
          <span className={s.LocatoionClient}>USA, California</span>
        </div>
        <SocMedia />
      </div>
      <div className={s.GradeClient}>
        <img src={Star} alt="gradeIcon" />
        <img src={Star} alt="gradeIcon" />
        <img src={Star} alt="gradeIcon" />
        <img src={Star} alt="gradeIcon" />
        <img src={Star} alt="gradeIcon" />
      </div>
      <p className={s.ReviewClientText}>
        Bagavdin is a talented developer who doesn't just write code; he creates
        products that inspire and simplify life.
      </p>
    </div>
  );
};

export default CardReviwes;
