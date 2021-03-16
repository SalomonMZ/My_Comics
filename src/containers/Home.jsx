import React from "react";
import ComicCardContainer from "../components/ComicCardContainer";
import "../styles/Home.css";

const Home = () => {
  return (
    <main className="Home">
      <div className="Home--container">
        <ComicCardContainer />
      </div>
    </main>
  );
};

export default Home;
