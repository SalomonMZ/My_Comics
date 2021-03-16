import React, { useContext, useEffect, useState } from "react";
import ComicCard from "./ComicCard";
import ComicsContext from "../context/ComicsContext";
import getRandomComic from "../utils/getRandomComic";
import Loader from "./Loader";

import "../styles/ComicCard.css";

const ComicCardContainer = () => {
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const { state, setComic } = useContext(ComicsContext);
  const { comic } = state;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getRandomComic();
      setComic(response);
      setLoading(false);
    };
    fetchData();
  }, [state.myRatedComics]);

  return <>{loading ? <Loader /> : <ComicCard comic={comic} />}</>;
};

export default ComicCardContainer;
