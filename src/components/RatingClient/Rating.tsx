import React from "react";
import Star from "../../../public/Star.svg";

interface RatingProps {
  rating: number
}

const GradeClient: React.FC<RatingProps> = ({ rating }) => {
  const stars = Array.from({length: rating}, (_, index) => (
    <img key={index} src={Star} alt="star" />
  ))
  return <div>{stars}</div>
};

export default GradeClient;
