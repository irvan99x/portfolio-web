import React from "react";
import Data from "./Data";
import Social from "./Social";
import ScrollDown from "./ScrollDown";
import "./home.css";

const Home = () => {
  return (
    <div className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </div>
  );
};

export default Home;
