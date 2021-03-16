import React, { useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import ComicsContext from "../context/ComicsContext";
import "../styles/Rating.css";

const Rating = ({ comic, disabled }) => {
  const [rating, setRating] = useState(comic.rate);
  const [hover, setHover] = useState(null);
  const { rateComic } = useContext(ComicsContext);
  const handeClick = (value) => () => {
    if (!disabled) {
      setRating(value);
      const ratedComic = { ...comic, rate: value };
      setRating(null);
      rateComic(ratedComic);
    }
  };

  return (
    <>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={handeClick(ratingValue)}
              disabled={disabled}
            />
            <FaStar
              className="star"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (rating || hover) ? "#ffc107" : "#e4e5e9"}
              size={45}
            />
          </label>
        );
      })}
    </>
  );
};

export default Rating;
