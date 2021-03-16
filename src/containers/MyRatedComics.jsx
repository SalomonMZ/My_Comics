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
          {myRatedComics.map((comic, i) => (
            <ComicCard comic={comic} disabled={true} key={i} />
          ))}
        </div>
      ) : (
        <h1>Ops! It looks like you haven't rate any comic yet</h1>
      )}
    </main>
  );
};

export default MyRatedComics;
