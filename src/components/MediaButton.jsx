import React, { useState } from "react";

export const MediaButton = ({ media, index }) => {
  const [counter, setCounter] = useState(0);

  return (
    <button className="btn" key={index}>
      <img
        src={media.icon}
        alt={media.name}
        onClick={() => setCounter(counter + 1)}
      />
      <span>{counter}</span>
    </button>
  );
};
