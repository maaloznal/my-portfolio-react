import ArrowBtn from "../ArrowBtn/ArrowBtn";
import CardReviwes from "../CardReviwes/CardReviwes";
import s from "./s.module.css";

const Reviews = () => {
  return (
    <div className={s.ReviewsSection}>
      <div className={s.ReviewsTitleMainDivCont}>
        <div className={s.ReviewsTitleMainDiv}>
          <div className={s.ReviewsTitleTextDiv}>
            <span className={s.Testimonials}>Testimonials</span>
            <h2 className={s.ReviewsTitleText}>What My Clients Say</h2>
            <span className={s.TotalReviews}>Total Reviews</span>
            <span className={s.CountReviews}>323</span>
          </div>
        </div>
        <ArrowBtn />
      </div>
      <div className={s.ReviewsClientMainCont}>
        <CardReviwes />
        <CardReviwes />
        <CardReviwes />
      </div>
    </div>
  );
};

export default Reviews;
