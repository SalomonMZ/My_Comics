import axios from "axios";

const getRandomURL = () => {
  const MAX_COMIC_NUMBER = 100;
  const MIN_COMIC_NUMBER = 50;
  const randomComicNumber =
    Math.floor(Math.random() * (MAX_COMIC_NUMBER - MIN_COMIC_NUMBER + 1)) +
    MIN_COMIC_NUMBER;

  return `https://xkcd.com/${randomComicNumber}/info.0.json`;
};

const getRandomComic = async () => {
  const URL = getRandomURL();
  const proxiedURL = `https://cors-anywhere.herokuapp.com/${URL}`;
  try {
    const response = await axios(proxiedURL);
    return response.data;
  } catch (e) {
    return `Something Happen: ${e}`;
  }
};

export default getRandomComic;
