import imageTitle from "../../../public/Vector_1.svg";
import MainBtn from "../MainBtn/MainBtn";
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
          <h2 className={titleStyle.textLetswork}>Let’s</h2>
          <MainBtn/>
        </div>
        <div className="text">
          <h2 className={titleStyle.textwork}>WORK TOGETHER</h2>
        </div>
      </div>
    </div>
  );
};

export default Title;
