import React, { useContext, useEffect, useState } from "react";
import Rating from "./Rating";

import "../styles/ComicCard.css";

const ComicCard = ({ comic }) => {
  return (
    <div className="Comic--card">
      <h1>{comic.title || "Titulo"}</h1>
      <img src={comic.img} alt={comic.title} />
      <div>
        <Rating comic={comic} />
      </div>
    </div>
  );
};

export default ComicCard;
