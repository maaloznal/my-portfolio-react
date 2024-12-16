import s from "./s.module.css";
import PortfolioArrowRight from "../../../public/PortfolioArrowRight.svg";
import PortfolioArrowLeft from "../../../public/PortfolioArrowLeft.svg";
import viewServicesBtn from "../../../public/ViewAllServices.png";
import Layout from "../../../public/Layout.png";
import fakestore from "../../../public/fakestore.png";
import myLibPortfolio from "../../../public/myLibPortfolio.png";
import viewProjectArrow from "../../../public/viewProjectArrow.svg";

interface Project {
  name: string;
  date: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "TealuxE",
    date: "October 2024",
    image: Layout,
    link: "https://maaloznal.github.io/layout/",
  },
  {
    name: "Fake Store",
    date: "November 2024",
    image: fakestore,
    link: "https://maaloznal.github.io/Fake-Store/",
  },
  {
    name: "My Library",
    date: "October 2024",
    image: myLibPortfolio,
    link: "https://maaloznal.github.io/mylibrary/",
  },
];

const Portfolio = () => {
  return (
    <div className={s.PortfolioSection}>
      <div className={s.PhotoWorkMainDiv}>
        <div className={s.PhotoWorkTitle}>
          <span className={s.PhotoWorkSpan}>Portfolio</span>
          <h2 className={s.PhotoWorkText}>Explore My Development Work</h2>
        </div>
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
          <div className={s.PhotoWorkBtnViewServices}>
            <img src={viewServicesBtn} alt="img" />
          </div>
        </div>
      </div>

      <div className={s.PortfolioImageWorkMainDiv}>
        {projects.map((project, index) => (
          <div className={s.ImageCardMain} key={index}>
            <div className={s.ImageDivCard}>
              <img className={s.ImageDiv} src={project.image} alt="image" />
            </div>
            <div className={s.ImageDescriptionMainDiv}>
              <div className={s.ImageDescriptionNameAndData}>
                <span className={s.NamePhoto}>{project.name}</span>
                <span className={s.DatePhoto}>{project.date}</span>
              </div>
              <div className={s.ViewProjectMainDiv}>
                <a className={s.ViewProject} href={project.link}>
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
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
