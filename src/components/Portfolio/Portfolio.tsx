import s from "./s.module.css";
import Layout from "../../../public/Layout.png";
import fakestore from "../../../public/fakestore.png";
import myLibPortfolio from "../../../public/myLibPortfolio.png";
import viewProjectArrow from "../../../public/viewProjectArrow.svg";
import ArrowBtn from "../ArrowBtn/ArrowBtn";
import { useState } from "react";

interface Project {
  id: number
  name: string;
  date: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "TealuxE",
    date: "October 2024",
    image: Layout,
    link: "https://maaloznal.github.io/layout/",
  },
  {
    id: 2,
    name: "Fake Store",
    date: "November 2024",
    image: fakestore,
    link: "https://maaloznal.github.io/Fake-Store/",
  },
  {
    id: 3,
    name: "My Library",
    date: "October 2024",
    image: myLibPortfolio,
    link: "https://maaloznal.github.io/mylibrary/",
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const portfolioPerPage = 3;

  const handleScrollLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - portfolioPerPage, 0));
  };

  const handleScrollRight = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + portfolioPerPage, projects.length - portfolioPerPage)
    );
  };

  const displayedPortfolio = projects.slice(
    currentIndex,
    currentIndex + portfolioPerPage
  );

  return (
    <div id="portfolioSection" className={s.PortfolioSection}>
      <div className={s.PhotoWorkMainDiv}>
        <div className={s.PhotoWorkTitle}>
          <span className={s.PhotoWorkSpan}>Portfolio</span>
          <h2 className={s.PhotoWorkText}>Explore My Development Work</h2>
        </div>
        <ArrowBtn
          onLeftClick={handleScrollLeft}
          onRightClick={handleScrollRight}
          isLeftDisabled={currentIndex === 0}
          isRightDisabled={currentIndex + portfolioPerPage >= projects.length}
        />
      </div>

      <div id="PortgolioImage" className={s.PortfolioImageWorkMainDiv}>
        {displayedPortfolio.map((project) => (
          <div className={s.ImageCardMain} key={project.id}>
            <div className={s.ImageDivCard}>
              <img
                className={s.ImageDiv}
                src={project.image}
                alt={project.name}
              />
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
