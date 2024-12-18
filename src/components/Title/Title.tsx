import imageTitle from "../../../public/Vector_1.svg";
import LetsWork from "../LetsWork/LetsWork";
import titleStyle from "./title.module.css";

const Title = () => {
  return (
    <div className={titleStyle.title}>
      <div className={titleStyle.nameDivContainer}>
        <span className={titleStyle.nameDivSpan}>STUNNING DEVELOPMENT BY</span>
        <h1 className={titleStyle.nameDiv}>BAGAVDIN MAGOMEDOV</h1>
      </div>
      <img className={titleStyle.imagetitle} src={imageTitle} alt="image" />
      <LetsWork/>
    </div>
  );
};

export default Title;
