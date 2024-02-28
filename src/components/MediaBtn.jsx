import React, { useState } from "react";

export const MediaBtn = ({ media }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center">
      <a onClick={() => setCounter(counter + 1)}>
        <media.icon size={"28"} />
      </a>
      <span>{counter}</span>
    </div>
  );
};