import imageTitle from "../../../public/Vector_1.svg";
import LetsWork from "../LetsWork/LetsWork";
import titleStyle from "./title.module.css";

const Title = () => {
  return (
    <div className={titleStyle.SectionTit}>
      <div className={titleStyle.SectionTitMain}>
        <div className={titleStyle.title}>
          <div className={titleStyle.nameDivContainer}>
            <span className={titleStyle.nameDivSpan}>
              STUNNING DEVELOPMENT BY
            </span>
            <h1 className={titleStyle.nameDiv}>BAGAVDIN MAGOMEDOV</h1>
          </div>
          <div className={titleStyle.LetsWork}>
            <LetsWork />
          </div>
        </div>
        <img className={`${titleStyle.mySvg} ${titleStyle.imagetitle}`} src={imageTitle} alt="image" />
      </div>
    </div>
  );
};

export default Title;
