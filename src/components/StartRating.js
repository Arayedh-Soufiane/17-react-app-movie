import React, { useState } from "react";
import "./StartRating.css";
import { FaStar } from "react-icons/fa";

export default function StartRating(g) {
  const [rating, setRating] = useState(null);
  const [hover, sethover] = useState(null);

  return (
    <div className="AAAp">
      {[...Array(10)].map((stra, i) => {
        const ratingValue = i + 1;
        return (
          <label key={Math.random()}>
            <input
              key={Math.random()}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                g.rrrt(ratingValue);
              }}
            />
            <FaStar
              key={Math.random()}
              className="star"
              size={50}
              color={ratingValue <= (rating || hover) ? "#ffc107 " : "black"}
              onMouseLeave={() => sethover(null)}
              onMouseEnter={() => sethover(ratingValue)}
            />
          </label>
        );
      })}
    </div>
  );
}
