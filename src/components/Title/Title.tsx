import imageTitle from "../../../public/Vector_1.svg";
import workUrl from "../../../public/letsworkicon.svg";
import titleStyle from "./title.module.css";

const Title = () => {
  return (
    <div className={titleStyle.title}>
      <div className={titleStyle.nameDivContainer}>
        <span className={titleStyle.nameDivSpan}>STUNNING DEVELOPMENT BY</span>
        <h1 className={titleStyle.nameDiv}>BAGAVDIN MAGOMEDOV</h1>
      </div>
      <img className={titleStyle.imagetitle} src={imageTitle} alt="image" />
      <div className={titleStyle.letsWork}>
        <div className={titleStyle.textAndBtn}>
          <h2 className={titleStyle.textLetswork}>LET'S</h2>
          <a className={titleStyle.btnLetswork} href="#">
            <img className={titleStyle.workUrl}src={workUrl} alt="icon" />
          </a>
        </div>
        <div className="text">
          <h2 className={titleStyle.textwork}>WORK TOGETHER</h2>
        </div>
      </div>
    </div>
  );
};

export default Title;
