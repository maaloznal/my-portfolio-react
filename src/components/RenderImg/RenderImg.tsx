import mainImage from "../../../public/Fotoram.png";
import s from './RenderImage.module.css'

const RenderImage = () => {
  return (
    <div className={s.renderImageDiv}>
      <img className={s.imgMain} src={mainImage} alt="image" />
    </div>
  );
};

export default RenderImage;
