import React, { useContext } from "react";
import ComicCard from "../components/ComicCard";
import ComicsContext from "../context/ComicsContext";
import "../styles/MyRatedComics.css";

const MyRatedComics = () => {
  const { state } = useContext(ComicsContext);
  const { myRatedComics } = state;
  return (
    <main>
      {myRatedComics.length > 0 ? (
          <div className="MyList">
          {myRatedComics.map((comic) => (
            <ComicCard comic={comic} />
          ))}
        </div>
      ) : (
        <h1>Ops! It looks like you haven't rate any comic yet</h1>
      )}
    </main>
  );
};

export default MyRatedComics;
