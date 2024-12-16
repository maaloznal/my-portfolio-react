import Services from "../Services/Services";
import s from "./s.module.css";
import titleStyle from "../Title/title.module.css";
import developmentIcon from "../../../public/developmentIcon.svg";
import workUrl from "../../../public/letsworkicon.svg";
import developmentImage from "../../../public/developmentImage.jpeg";

interface ServiceHighlights {
  text: string;
}

const serviceHighlightsData: ServiceHighlights[] = [
  {
    text: "Development of websites, software, and other projects.",
  },
  {
    text: "I know how to bring your ideas to life.",
  },
  {
    text: "A flexible approach to development, including the creation of custom solutions.",
  },
  {
    text: "Fast and high-quality results for your project.",
  },
];

const Development = () => {
  return (
    <div className={s.mainCont}>
      <Services />
      <div className={s.developmentMainContainer}>
        <div className={s.developmentDescription}>
          <div className={s.developmentDescriptionTitle}>
            <h3 className={s.developmentDescriptionTitleText}>Development</h3>
            <a className={titleStyle.btnLetswork} href="#">
              <img className={titleStyle.workUrl} src={workUrl} alt="icon" />
            </a>
          </div>
          <div className={s.developmentDescriptionText}>
            <p className={s.developmentDescriptionTextParagraph}>
              My development services are focused on creating high-quality and
              functional solutions for your projects. Whether it's a website or
              web application, I am ready to bring your ideas to life. I work
              closely with you to ensure the result meets your needs and
              expectations.
            </p>

            <span className={s.serviceMainSpan}>Service Highlights</span>
          </div>

          <div className={s.serviceHighlights}>
            {serviceHighlightsData.map(
              (
                item: {
                  text: string;
                },
                index: number
              ) => (
                <div className={s.serviceDiv} key={index}>
                  <img src={developmentIcon} alt="icon" />
                  <span className={s.servicesHighlightsText}>{item.text}</span>
                </div>
              )
            )}
          </div>
        </div>
        <div className={s.developmentMainImage}>
          <img
            className={s.developmentImage}
            src={developmentImage}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Development;
