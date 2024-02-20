import React, { useState } from "react";

export const MediaButton = ({ media }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <a>
        <img
          src={media.icon}
          alt={media.name}
          onClick={() => setCounter(counter + 1)}
        />
      </a>
      <span>{counter}</span>
    </div>
  );
};
