import React from "react";
import Actions from "./ActionButtons";
import { CAROUSEL_ITEMS } from "./utils";
import "./styles.css";

const Carousel = () => {
  return (
    <div className="relative overflow carousel-container">
      <Actions />

      {CAROUSEL_ITEMS.map((ele, indx) => (
        <div
          key={ele.id}
          style={{
            background: ele.bg,
            transform: `translate(${400 * indx}px)`,
          }}
          className="container absolute"
        >
          {ele.text}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
