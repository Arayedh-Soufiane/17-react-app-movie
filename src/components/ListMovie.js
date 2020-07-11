import React from "react";
import "./ListMovie.css";

import StarRatingComponent from "react-star-rating-component";

export default function ListMovie(props) {
  return (
    <div>
      <div className="cllistemovies">
        {props.x.map((p) => (
          <div key={Math.random()} className="clscard">
            <p key={Math.random()}>
              <img width="347px" className="clsimage" src={p.image}></img>
            </p>

            <p key={Math.random()}>Name:{p.name}</p>

            <StarRatingComponent
              name={"EToil"}
              starCount={10}
              value={parseFloat(p.rating)}
            />

            <p key={Math.random()}>Year:{p.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
