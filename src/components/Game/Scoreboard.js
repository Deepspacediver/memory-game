import React from "react";
import imagesArray from "../../helpers/importImages";

const Scoreboard = ({ currentScore = 0, bestScore = 0 }) => {
  return (
    <>
      <div>
        <p>Current score: {currentScore}</p>
      </div>
      <div>
        <p>
          Best score: {bestScore} / {imagesArray.length}
        </p>
      </div>
    </>
  );
};

export default Scoreboard;
