import s from "./s.module.css";
import PortfolioArrowRight from "../../../public/PortfolioArrowRight.svg";
import PortfolioArrowLeft from "../../../public/PortfolioArrowLeft.svg";
import viewServicesBtn from "../../../public/ViewAllServices.png";

interface ArrowBtnProps {
  onLeftClick: () => void;
  onRightClick: () => void;
  isLeftDisabled?: boolean;
  isRightDisabled?: boolean;
}

const ArrowBtn: React.FC<ArrowBtnProps> = ({
  onLeftClick,
  onRightClick,
  isLeftDisabled = false,
  isRightDisabled = false,
}) => {
  return (
    <div className={s.PhotoWorkButtons}>
      <div className={s.PhotoWorkBtnArrows}>
        <button
          className={s.PortfolioArrowBtn}
          onClick={onLeftClick}
          disabled={isLeftDisabled}
        >
          <img
            className={s.PortfolioArray}
            src={PortfolioArrowRight}
            alt="Right Arrow"
          />
        </button>
        <button
          className={s.PortfolioArrowBtn}
          onClick={onRightClick}
          disabled={isRightDisabled}
        >
          <img
            className={s.PortfolioArray}
            src={PortfolioArrowLeft}
            alt="Left Arrow"
          />
        </button>
      </div>
      <a
        className={s.PhotoWorkBtnViewServicesA}
        href="https://github.com/maaloznal"
      >
        <div className={s.PhotoWorkBtnViewServices}>
          <img src={viewServicesBtn} alt="View Services" />
        </div>
      </a>
    </div>
  );
};

export default ArrowBtn;
