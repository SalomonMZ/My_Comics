import initialState from "../initialState";
import { useState } from "react";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const rateComic = (payload) => {
    setState({
      ...state,
      myRatedComics: [...state.myRatedComics, payload],
    });
  };

  const setComic = (payload) => {
    setState({
      ...state,
      comic: {
        num: payload.num,
        safe_title: payload.safe_title,
        img: payload.img,
        title: payload.title,
        rate: 0,
      },
    });
  };

  return {
    state,
    rateComic,
    setComic,
  };
};

export default useInitialState;
