import React from 'react';
import s from './s.module.css';
import SocMedia from '../SocMedia/SocMedia';
import Rating from '../RatingClient/Rating'; 
import { DataReviwes } from '../DataReviwesClient/DataReviwesClient';

interface CardReviwesProps {
  review: DataReviwes; 
}

const CardReviwes: React.FC<CardReviwesProps> = ({ review }) => {
  return (
    <div className={s.ReviewClientCard}>
      <div className={s.DataClient}>
        <div className={s.NameLocationClientCont}>
          <span className={s.NameClientSpan}>{review.name}</span>
          <span className={s.LocatoionClient}>{review.location}</span>
        </div>
        <SocMedia />
      </div>
      <div className={s.GradeClient}>
        <Rating rating={review.rating} /> 
      </div>
      <p className={s.ReviewClientText}>{review.text}</p>
    </div>
  );
};

export default CardReviwes;