import React, { useEffect, useState } from "react";
import MemoryCard from "./MemoryCard";
import Scoreboard from "./Scoreboard";
import imagesArray from "../../helpers/importImages";

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
      <div className="memory-card-container">
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
      </div>
    </>
  );
};

export default MemoryGame;
