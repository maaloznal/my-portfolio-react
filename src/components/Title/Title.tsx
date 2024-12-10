import imageTitle from "../../../public/Vector_1.svg";
import workUrl from "../../../public/letsworkicon.svg";
import titleStyle from "./title.module.css";

const Title = () => {
  return (
    <div className={titleStyle.title}>
      <div className="nameDiv">
        <span className={titleStyle.nameDivSpan}>STUNNING DEVELOPMENT BY</span>
        <h1 className={titleStyle.nameDiv}>BAGAVDIN MAGOMEDOV</h1>
      </div>
      <img className={titleStyle.imagetitle} src={imageTitle} alt="image" />
      <div className="letsWork">
        <div className="textAndBtn">
          <h2 className={titleStyle.textLetswork}>LET'S</h2>
          <a className="btnLetswork" href="#">
            <img className="workUrl" src={workUrl} alt="icon" />
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
