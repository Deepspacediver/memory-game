import React from "react";
import imagesArray from "../../helpers/importImages";
import styled from "styled-components";

const Scoreboard = ({ currentScore = 0, bestScore = 0 }) => {
  return (
    <StyledScoreboard>
      <p>Current score: {currentScore}</p>
      <p>
        Best score: {bestScore} / {imagesArray.length}
      </p>
    </StyledScoreboard>
  );
};

const StyledScoreboard = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;

  p{
    padding: 1.5rem;
    background-color: var(--secondary-color);
    color: var(--primary-color);
    font-weight: bold;
    border-radius: 2rem;
    text-align: center;
  }
`;

export default Scoreboard;
