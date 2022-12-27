import React from "react";
import styled from "styled-components";

const MemoryCard = ({ name, src, handleClick }) => (
  <StyledMemoryCard
    data-name={name}
    className="memory-card"
    onClick={handleClick}
  >
    <img src={src} alt={name + " album"} />
    <p>{name}</p>
  </StyledMemoryCard>
);

const StyledMemoryCard = styled.div`
  background-color: var(--complementary-color);
  display: grid;
  padding: 1.5rem;
  justify-content: center;

  p {
    padding-top: 0.8rem;
    text-align: center;
    font-weight: bold;
  }
  img[alt="THE VELVET UNDERGROUND & NICO album"] {
    margin: 0 auto;
    width: 90%;
  }

  &:active {
    transform: scale(95%);
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      -webkit-box-shadow: 1px 5px 26px 3px rgba(226, 174, 19, 1);
      -moz-box-shadow: 1px 5px 26px 3px rgba(226, 174, 19, 1);
      box-shadow: 1px 5px 26px 3px rgba(226, 174, 19, 1);
    }
  }

  @media (hover: none) {
    &:active {
      -webkit-box-shadow: 1px 5px 26px 3px rgba(226, 174, 19, 1);
      -moz-box-shadow: 1px 5px 26px 3px rgba(226, 174, 19, 1);
      box-shadow: 1px 5px 26px 3px rgba(226, 174, 19, 1);
    }
  }
`;
export default MemoryCard;
