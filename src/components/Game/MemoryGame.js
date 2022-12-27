import React, { useEffect, useState } from "react";
import MemoryCard from "./MemoryCard";
import Scoreboard from "./Scoreboard";
import imagesArray from "../../helpers/importImages";
import styled from "styled-components";

const MemoryGame = () => {
  const [imgArr, setImgArr] = useState(imagesArray);
  const [clickedSet, setClickSet] = useState(new Set());
  const [score, setScore] = useState({ currentScore: 0, bestScore: 0 });

  const getRandomOrderImgs = (imgArr) => {
    const copyImgArr = [...imgArr];
    const newImgArr = [];
    while (copyImgArr.length) {
      const randomImg = copyImgArr.splice(
        Math.floor(Math.random() * copyImgArr.length),
        1
      );
      newImgArr.push(...randomImg);
    }
    return newImgArr;
  };

  useEffect(() => {
    setImgArr(getRandomOrderImgs(imagesArray));
    setScore((prevState) => ({
      currentScore: clickedSet.size,
      bestScore:
        clickedSet.size > prevState.bestScore
          ? clickedSet.size
          : prevState.bestScore,
    }));
  }, [clickedSet]);

  const handleSetValidation = (e) => {
    const name = e.currentTarget.dataset.name;
    if (clickedSet.has(name)) setClickSet(new Set());
    else setClickSet(new Set([...clickedSet, name]));
  };

  return (
    <>
      <Scoreboard
        currentScore={score.currentScore}
        bestScore={score.bestScore}
      />
      <StyledCardsContainer>
        {imgArr.map((obj, i) => {
          return (
            <React.Fragment key={i}>
              <MemoryCard
                handleClick={handleSetValidation}
                name={obj.name.toUpperCase()}
                src={obj.src}
              />
            </React.Fragment>
          );
        })}
      </StyledCardsContainer>
    </>
  );
};

const StyledCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 14rem));
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 1rem;

  @media (min-width: 925px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 28rem));
  }
`;

export default MemoryGame;
