import s from "./s.module.css";
import PortfolioArrowRight from "../../../public/PortfolioArrowRight.svg";
import PortfolioArrowLeft from "../../../public/PortfolioArrowLeft.svg";
import viewServicesBtn from "../../../public/ViewAllServices.png";

const ArrowBtn = () => {
  return (
    <div className={s.PhotoWorkButtons}>
      <div className={s.PhotoWorkBtnArrows}>
        <div className={s.PortfolioArrowBtn}>
          <img
            className={s.PortfolioArray}
            src={PortfolioArrowRight}
            alt="icon"
          />
        </div>
        <div className={s.PortfolioArrowBtn}>
          <img
            className={s.PortfolioArray}
            src={PortfolioArrowLeft}
            alt="icon"
          />
        </div>
      </div>
      <a className={s.PhotoWorkBtnViewServicesA} href="https://github.com/maaloznal">
        <div className={s.PhotoWorkBtnViewServices}>
          <img src={viewServicesBtn} alt="img" />
        </div>
      </a>
    </div>
  );
};

export default ArrowBtn;
