import React, { useState } from "react";

const Actions = () => {
  const [curr, setCurr] = useState(0);

  const handleNext = () => {
    const carousels = document.querySelectorAll(".container");
    let newCurr = 0;
    if (curr === carousels.length - 1) newCurr = 0;
    else newCurr = curr + 1;

    for (let i = 0; i < carousels.length; i++) {
      carousels[i].style.transform = `translateX(${(i - newCurr) * 400}px)`;
    }
    setCurr(newCurr);
  };

  const handlePrev = () => {
    const carousels = document.querySelectorAll(".container");
    let newCurr = 0;
    if (curr === 0) newCurr = carousels.length - 1;
    else newCurr = curr - 1;

    for (let i = 0; i < carousels.length; i++) {
      carousels[i].style.transform = `translateX(${(i - newCurr) * 400}px)`;
    }
    setCurr(newCurr);
  };

  return (
    <>
      <button className="prev-button absolute" onClick={handlePrev}>
        Prev
      </button>
      <button className="next-button absolute" onClick={handleNext}>
        Next
      </button>
    </>
  );
};

export default Actions;
