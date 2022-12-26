import React from "react";

const MemoryCard = ({ name, src, handleClick }) => (
  <div data-name={name} className="memory-card" onClick={handleClick}>
    <img src={src} alt={name + " album"} />
    <p>{name}</p>
  </div>
);
export default MemoryCard;
