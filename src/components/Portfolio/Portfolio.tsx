import s from "./s.module.css";
import PortfolioArrowRight from "../../../public/PortfolioArrowRight.svg";
import PortfolioArrowLeft from "../../../public/PortfolioArrowLeft.svg";
import viewServicesBtn from "../../../public/ViewAllServices.png";
import Layout from "../../../public/Layout.png";
import fakestore from "../../../public/fakestore.png";
import myLibPortfolio from "../../../public/myLibPortfolio.png";
import viewProjectArrow from "../../../public/viewProjectArrow.svg";

const Portfolio = () => {
  return (
    <div className={s.PortfolioSection}>
      <div className={s.PhotoWorkMainDiv}>
        <div className={s.PhotoWorkTitle}>
          <span className={s.PhotoWorkSpan}>Portfolio</span>
          <h2 className={s.PhotoWorkText}>Explore My Development work</h2>
        </div>
        <div className={s.PhotoWorkButtons}>
          <div className={s.PhotoWorkBtnArrows}>
            <div className={s.PortfolioArrowBtn}>
              <img src={PortfolioArrowRight} alt="icon" />
            </div>
            <div className={s.PortfolioArrowBtn}>
              <img src={PortfolioArrowLeft} alt="icon" />
            </div>
          </div>
          <div className={s.PhotoWorkBtnViewServices}>
            <img src={viewServicesBtn} alt="img" />
          </div>
        </div>
      </div>

      <div className={s.PortfolioImageWorkMainDiv}>
        <div className={s.ImageCardMain}>
          <div className={s.ImageDivCard}>
            <img className={s.ImageDiv} src={Layout} alt="image" />
          </div>
          <div className={s.ImageDescriptionMainDiv}>
            <div className={s.ImageDescriptionNameAndData}>
              <span className={s.NamePhoto}>ToDo List</span>
              <span className={s.DatePhoto}>October 2024</span>
            </div>
            <div className={s.ViewProjectMainDiv}>
              <a className={s.ViewProject}>
                <span className={s.ViewProjectText}>View Project</span>
                <img
                  className={s.ViewProjectImage}
                  src={viewProjectArrow}
                  alt="img"
                />
              </a>
            </div>
          </div>
        </div>

        <div className={s.ImageCardMain}>
          <div className={s.ImageDivCard}>
            <img className={s.ImageDiv} src={fakestore} alt="image" />
          </div>
          <div className={s.ImageDescriptionMainDiv}>
            <div className={s.ImageDescriptionNameAndData}>
              <span className={s.NamePhoto}>Fake Store</span>
              <span className={s.DatePhoto}>November 2024</span>
            </div>
            <div className={s.ViewProjectMainDiv}>
              <a className={s.ViewProject}>
                <span className={s.ViewProjectText}>View Project</span>
                <img
                  className={s.ViewProjectImage}
                  src={viewProjectArrow}
                  alt="img"
                />
              </a>
            </div>
          </div>
        </div>

        <div className={s.ImageCardMain}>
          <div className={s.ImageDivCard}>
            <img className={s.ImageDiv} src={myLibPortfolio} alt="image" />
          </div>
          <div className={s.ImageDescriptionMainDiv}>
            <div className={s.ImageDescriptionNameAndData}>
              <span className={s.NamePhoto}>My Library</span>
              <span className={s.DatePhoto}>October 2024</span>
            </div>
            <div className={s.ViewProjectMainDiv}>
              <a className={s.ViewProject}>
                <span className={s.ViewProjectText}>View Project</span>
                <img
                  className={s.ViewProjectImage}
                  src={viewProjectArrow}
                  alt="img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
