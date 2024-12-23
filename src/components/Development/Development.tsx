import Services from "../Services/Services";
import s from "./s.module.css";
import developmentIcon from "../../../public/developmentIcon.svg";
import developmentImage from "../../../public/developmentImage.jpeg";
import MainBtn from "../MainBtn/MainBtn";
import { serviceHighlightsData } from "../ServiceHighlightsData/ServiceHighlightsData";



const Development = () => {
  return (
    <div className={s.mainCont}>
      <Services />
      <div className={s.developmentMainContainer}>
        <div className={s.developmentDescription}>
          <div className={s.developmentDescriptionTitle}>
            <h3 className={s.developmentDescriptionTitleText}>Development</h3>
            <MainBtn/>
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
