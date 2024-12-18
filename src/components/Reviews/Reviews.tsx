import { useState } from "react";
import ArrowBtn from "../ArrowBtn/ArrowBtn";
import CardReviwes from "../CardReviwes/CardReviwes";
import s from "./s.module.css";
import { reviews } from "../DataReviwesClient/DataReviwesClient";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;
  const handleScrollLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - reviewsPerPage, 0));
  };

  const handleScrollRight = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + reviewsPerPage, reviews.length - reviewsPerPage)
    );
  };

  const displayedReviews = reviews.slice(
    currentIndex,
    currentIndex + reviewsPerPage
  );

  return (
    <div className={s.ReviewsSection}>
      <div className={s.ReviewsTitleMainDivCont}>
        <div className={s.ReviewsTitleMainDiv}>
          <div className={s.ReviewsTitleTextDiv}>
            <span className={s.Testimonials}>Testimonials</span>
            <h2 className={s.ReviewsTitleText}>What My Clients Say</h2>
            <span className={s.TotalReviews}>Total Reviews</span>
            <span className={s.CountReviews}>10</span>
          </div>
        </div>
        <ArrowBtn
          onLeftClick={handleScrollLeft}
          onRightClick={handleScrollRight}
          isLeftDisabled={currentIndex === 0}
          isRightDisabled={currentIndex + reviewsPerPage >= reviews.length}
        />
      </div>
      <div className={s.ReviewsClientMainCont}>
        {displayedReviews.map((review) => (
          <CardReviwes key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
